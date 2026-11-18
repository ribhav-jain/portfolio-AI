import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cx } from "../lib/cx.ts";
import { prefersReducedMotion } from "../lib/motion.ts";
import { Icon } from "./Icon.tsx";
import "./AgentRun.css";

type Phase = "running" | "waiting" | "approved" | "denied";

const STEPS = [
  { label: "Request", detail: "received" },
  { label: "Intent router", detail: "intent = action" },
  { label: "Agents", detail: "plan → tool call" },
  { label: "MCP tool gateway", detail: "scope ok · needs approval" },
  { label: "Human approval", detail: "waiting for a human" },
  { label: "Response", detail: "action executed" },
];
const GATE = 4; // index of the human-approval step
const STEP_DELAY = 620;

const COPY: Record<Phase, { status: string; gate: string; note: ReactNode }> = {
  running: {
    status: "Running",
    gate: STEPS[GATE].detail,
    note: (
      <>
        <strong>Your call.</strong> The gateway has paused this action. Nothing runs until a person
        approves it.
      </>
    ),
  },
  waiting: {
    status: "Waiting for approval",
    gate: STEPS[GATE].detail,
    note: (
      <>
        <strong>Your call.</strong> The gateway has paused this action. Nothing runs until a person
        approves it.
      </>
    ),
  },
  approved: {
    status: "Completed",
    gate: "approved by a human",
    note: (
      <>
        <strong>Approved.</strong> The action ran through the gateway and the response went back to
        the user.
      </>
    ),
  },
  denied: {
    status: "Declined",
    gate: "denied · nothing executed",
    note: (
      <>
        <strong>Denied.</strong> Nothing was executed and the request was declined.
      </>
    ),
  },
};

/**
 * An illustrative agent run that stops at a human-approval gate. It shows no real data:
 * the visitor approves or denies, and can replay it.
 */
export function AgentRun() {
  // Rendered paused at the gate, so the static page and reduced-motion visitors see a complete picture.
  const [phase, setPhase] = useState<Phase>("waiting");
  const [lit, setLit] = useState(GATE + 1); // how many steps are lit, from the top
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const later = useCallback((run: () => void, delay: number) => {
    timers.current.push(window.setTimeout(run, delay));
  }, []);
  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);

  const play = useCallback(() => {
    clearTimers();
    if (prefersReducedMotion()) {
      setPhase("waiting");
      setLit(GATE + 1);
      return;
    }
    setPhase("running");
    setLit(0);
    for (let step = 1; step <= GATE; step++) {
      later(() => setLit(step), 350 + (step - 1) * STEP_DELAY);
    }
    later(
      () => {
        setPhase("waiting");
        setLit(GATE + 1);
      },
      350 + GATE * STEP_DELAY,
    );
  }, [later, clearTimers]);

  const approve = () => {
    setPhase("approved");
    later(() => setLit(STEPS.length), prefersReducedMotion() ? 0 : 450);
  };

  // Play once, the first time the panel is properly in view.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        play();
      },
      { threshold: 0.35 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [play]);

  useEffect(() => clearTimers, [clearTimers]);

  const { status, gate, note } = COPY[phase];
  const decided = phase === "approved" || phase === "denied";
  const progress = phase === "approved" ? 1 : Math.max(0, lit - 1) / (STEPS.length - 1);

  return (
    <div
      ref={rootRef}
      className="run tile"
      data-state={phase}
      role="group"
      aria-label="Illustrative agent run with a human approval step"
    >
      <div className="run-head">
        <p className="run-title">
          Try a run <span className="chip">Illustrative</span>
        </p>
        <p className="status" aria-live="polite">
          <i aria-hidden="true" />
          <span>{status}</span>
        </p>
      </div>

      <ol className="flow" style={{ "--p": progress }}>
        {STEPS.map(({ label, detail }, index) => {
          const isGate = index === GATE;
          return (
            <li
              key={label}
              className={cx(
                "node",
                index < lit && "on",
                isGate && phase === "waiting" && "wait",
                isGate && phase === "denied" && "no",
              )}
            >
              <span className="dot">
                <Icon name="check" className="ck" />
                <Icon name="x" className="x" />
              </span>
              <b>{label}</b>
              <small>{isGate ? gate : detail}</small>
            </li>
          );
        })}
      </ol>

      <div className="gate">
        <p>{note}</p>
        <div className="gate-actions">
          {decided ? (
            <button className="btn sm" type="button" onClick={play}>
              <Icon name="replay" />
              Replay
            </button>
          ) : (
            <>
              <button
                className="btn sm primary"
                type="button"
                disabled={phase === "running"}
                onClick={approve}
              >
                Approve
              </button>
              <button
                className="btn sm"
                type="button"
                disabled={phase === "running"}
                onClick={() => setPhase("denied")}
              >
                Deny
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
