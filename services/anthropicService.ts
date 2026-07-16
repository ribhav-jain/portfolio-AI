import type Anthropic from "@anthropic-ai/sdk";
import {
  PROFILE,
  SKILL_CATEGORIES,
  EXPERIENCES,
  PROJECTS,
  EDUCATION,
  CERTIFICATIONS,
} from "../constants";

/**
 * ⚠️  Client-side demo only.
 * This runs the Anthropic SDK directly in the browser (`dangerouslyAllowBrowser`),
 * which means the API key is exposed in the shipped bundle. That is acceptable for
 * a local demo but NOT for a public deployment. For production, proxy this call
 * through a small backend / serverless function that holds the key server-side and
 * enforces rate limits. See the README "Security" section.
 */
const apiKey = process.env.ANTHROPIC_API_KEY ?? "";

// Opus 4.8 is the default. For a lightweight FAQ assistant like this,
// `claude-haiku-4-5` is a cheaper and faster alternative — swap it here if you prefer.
const MODEL = "claude-opus-4-8";

// The SDK (~380 KB) is code-split and only fetched the first time the chat is used.
let clientPromise: Promise<Anthropic | null> | null = null;
const getClient = (): Promise<Anthropic | null> => {
  if (!apiKey) return Promise.resolve(null);
  if (!clientPromise) {
    clientPromise = import("@anthropic-ai/sdk").then(
      ({ default: Anthropic }) =>
        new Anthropic({ apiKey, dangerouslyAllowBrowser: true })
    );
  }
  return clientPromise;
};

const SYSTEM_INSTRUCTION = `You are the AI assistant embedded in ${PROFILE.name}'s portfolio website. You answer visitors' questions about his professional background, strictly from the context below.

Voice: professional, warm, and concise. Speak about ${PROFILE.name} in the third person. Lead with the answer. Keep replies under ~3 sentences unless the visitor asks for detail. Use plain text — no markdown headings.

If a question falls outside this context, say so briefly and steer back to his work. For hiring or contact intent, share his email: ${PROFILE.email}.

── CONTEXT ──
Name: ${PROFILE.name}
Role: ${PROFILE.role}
Location: ${PROFILE.location}
Bio: ${PROFILE.about}

Skills:
${SKILL_CATEGORIES.map((c) => `- ${c.title}: ${c.skills.join(", ")}`).join("\n")}

Experience:
${EXPERIENCES.map(
  (e) =>
    `- ${e.role}, ${e.company} (${e.period}): ${e.description} [${e.technologies.join(", ")}]`
).join("\n")}

Education:
${EDUCATION.map((e) => `- ${e.degree}, ${e.school} (${e.period}). ${e.details}`).join("\n")}

Certifications:
${CERTIFICATIONS.map((c) => `- ${c.name} — ${c.issuer}`).join("\n")}

Projects:
${PROJECTS.map((p) => `- ${p.title} [${p.category}]: ${p.description}`).join("\n")}

Competitive profiles: HackerRank ${PROFILE.socials.hackerrank}, Kaggle ${PROFILE.socials.kaggle}.`;

type Role = "user" | "model" | "system";
interface HistoryItem {
  role: Role;
  content: string;
}

/** Map the UI's message log to a valid Anthropic messages array. */
function toAnthropicMessages(
  history: HistoryItem[],
  userMessage: string
): Anthropic.MessageParam[] {
  const mapped: Anthropic.MessageParam[] = history
    .filter((h) => h.role === "user" || h.role === "model")
    .map((h) => ({
      role: h.role === "model" ? ("assistant" as const) : ("user" as const),
      content: h.content,
    }));

  // The first message must be from the user — drop the leading greeting(s).
  while (mapped.length && mapped[0].role === "assistant") mapped.shift();

  mapped.push({ role: "user", content: userMessage });
  return mapped;
}

export const MODEL_LABEL = "Claude Opus 4.8";
export const isAssistantConfigured = () => apiKey !== "";

/**
 * Stream a reply from Claude. Calls `onDelta` with each text chunk as it arrives
 * and resolves with the full text.
 */
export const streamMessageToClaude = async (
  history: HistoryItem[],
  userMessage: string,
  onDelta: (chunk: string) => void
): Promise<string> => {
  const client = await getClient();
  if (!client) {
    return "The assistant isn't configured yet — add an ANTHROPIC_API_KEY to a .env file and restart the dev server to enable live chat.";
  }

  try {
    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: 1024,
      system: SYSTEM_INSTRUCTION,
      messages: toAnthropicMessages(history, userMessage),
    });

    stream.on("text", (delta) => onDelta(delta));

    const final = await stream.finalMessage();
    const text = final.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("");

    return text || "I'm sorry, I couldn't generate a response just now.";
  } catch (error) {
    if ((error as { status?: number })?.status === 429) {
      return "I'm getting a lot of questions right now — please try again in a moment.";
    }
    console.error("Anthropic API error:", error);
    return "Something went wrong reaching the assistant. Please try again shortly.";
  }
};
