import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { answer, GREETING, SUGGESTED_PROMPTS } from "../lib/assistant.ts";
import { cx } from "../lib/cx.ts";
import { prefersReducedMotion } from "../lib/motion.ts";
import { Icon } from "./Icon.tsx";
import "./AskAI.css";

interface Message {
  id: number;
  from: "bot" | "me";
  text: string;
}

const THINKING_DELAY = 320;

/** Floating "Ask AI" button and its chat panel. Answers come from lib/assistant.ts, offline. */
export function AskAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: 0, from: "bot", text: GREETING }]);
  const [thinking, setThinking] = useState(false);
  const [draft, setDraft] = useState("");

  const openButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const replyTimer = useRef<number | undefined>(undefined);
  const wasOpen = useRef(false);

  // Move focus into the panel when it opens and back to the button when it closes.
  useEffect(() => {
    if (open) inputRef.current?.focus();
    else if (wasOpen.current) openButtonRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Keep the newest message in view.
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [messages, thinking, open]);

  useEffect(() => () => window.clearTimeout(replyTimer.current), []);

  const send = (question: string) => {
    const text = question.trim();
    if (!text || thinking) return;

    setMessages((current) => [...current, { id: current.length, from: "me", text }]);
    setDraft("");
    setThinking(true);
    replyTimer.current = window.setTimeout(
      () => {
        setMessages((current) => [
          ...current,
          { id: current.length, from: "bot", text: answer(text) },
        ]);
        setThinking(false);
      },
      prefersReducedMotion() ? 0 : THINKING_DELAY,
    );
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    send(draft);
  };

  return (
    <>
      <button
        ref={openButtonRef}
        className="ai-btn glass"
        type="button"
        aria-haspopup="dialog"
        hidden={open}
        onClick={() => setOpen(true)}
      >
        <span className="spark" aria-hidden="true">
          <Icon name="stars" />
        </span>
        Ask AI
      </button>

      {open && (
        <div className="chat" role="dialog" aria-label="Portfolio Assistant">
          <div className="chat-head">
            <i aria-hidden="true">
              <Icon name="bot" />
            </i>
            <div>
              <b>Portfolio Assistant</b>
              <small>Quick answers</small>
            </div>
            <button
              className="icon-btn"
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <Icon name="x" />
            </button>
          </div>

          <div ref={bodyRef} className="chat-body" role="log" aria-live="polite">
            {messages.map(({ id, from, text }) => (
              <p key={id} className={cx("msg", from)}>
                {/* Replies appear word by word; the greeting is shown at once. */}
                {from === "bot" && id > 0
                  ? text.split(" ").map((word, index) => (
                      <span key={index} className="word" style={{ "--w": index }}>
                        {word}{" "}
                      </span>
                    ))
                  : text}
              </p>
            ))}
            {thinking && <p className="msg bot typing" aria-hidden="true" />}

            {messages.length === 1 && (
              <div className="suggest">
                <p>Suggested prompts</p>
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button key={prompt} type="button" onClick={() => send(prompt)}>
                    <Icon name="chat" />
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="chat-form" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about my work…"
              aria-label="Your question"
              autoComplete="off"
            />
            <button type="submit" aria-label="Send message" disabled={thinking}>
              <Icon name="send" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
