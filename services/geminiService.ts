import { GoogleGenAI } from "@google/genai";
import { PROFILE, SKILL_CATEGORIES, EXPERIENCES, PROJECTS, EDUCATION, CERTIFICATIONS } from "../constants";

// Initialize the client. 
// Note: In a real production app, you would proxy this through a backend to hide the key.
// Since this is a client-side demo instruction, we use the env var directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PROFILE.name}'s portfolio website. 
Your goal is to answer questions about Ribhav Jain's professional experience, skills, and projects based strictly on the following context.
Be professional, concise, and highlight his expertise in AI, Full Stack, and Security.

Context:
Name: ${PROFILE.name}
Role: ${PROFILE.role}
Bio: ${PROFILE.about}

Skills:
${SKILL_CATEGORIES.map(c => `- ${c.title}: ${c.skills.join(', ')}`).join('\n')}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description} (Tech: ${e.technologies.join(', ')})`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.school} (${e.period}). ${e.details}`).join('\n')}

Certifications:
${CERTIFICATIONS.map(c => `- ${c.name} by ${c.issuer}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Competitive Profiles:
- HackerRank: ${PROFILE.socials.hackerrank}
- Kaggle: ${PROFILE.socials.kaggle}

If asked about contact info, provide: ${PROFILE.email}.
If asked something outside this context, politely steer the conversation back to Ribhav's professional background.
Keep answers short (under 3 sentences) unless asked for elaboration.
`;

export const sendMessageToGemini = async (history: { role: string; content: string }[], userMessage: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.content }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try again later.";
  }
};