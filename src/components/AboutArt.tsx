import { AnimatedSvg } from "./AnimatedSvg.tsx";

/* Background illustrations for the About cards. Colours come from the .sa/.sh/.fa/.fh helpers in styles/ui.css. */

const EDGES = [
  "M60 70 175 120",
  "M60 170 175 120",
  "M60 170 175 220",
  "M60 270 175 220",
  "M175 120 290 170",
  "M175 220 290 170",
  "M290 170 400 110",
  "M290 170 400 230",
];
const NODES = [
  [60, 70],
  [60, 170],
  [60, 270],
  [175, 120],
  [175, 220],
  [290, 170],
  [400, 110],
  [400, 230],
];
const HUB = 5;

/** A small agent graph with signals travelling along its edges. */
export function AgentGraphArt() {
  return (
    <AnimatedSvg viewBox="0 0 460 340" preserveAspectRatio="xMidYMid meet">
      <path className="sa" strokeWidth="1.5" opacity=".4" d={EDGES.join("")} />
      <g className="fh">
        {EDGES.map((edge, index) => {
          const begin = `${(index * 0.35).toFixed(2)}s`;
          return (
            <circle key={edge} r="4">
              <animateMotion dur="2.4s" begin={begin} repeatCount="indefinite" path={edge} />
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="2.4s"
                begin={begin}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </g>
      <g className="fa" opacity=".14">
        {NODES.map(([cx, cy], index) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={index === HUB ? 20 : 16} />
        ))}
      </g>
      <g className="fa sh" strokeWidth="1.5">
        {NODES.map(([cx, cy], index) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={index === HUB ? 8 : 6} />
        ))}
      </g>
    </AnimatedSvg>
  );
}

const ROUTES = [
  { path: "M55 100H145", r: 4, dur: "2s", begin: "0s" },
  { path: "M40 85 100 50 160 85", r: 3.5, dur: "2.6s", begin: ".6s" },
  { path: "M40 115 100 150 160 115", r: 3.5, dur: "2.6s", begin: "1.3s" },
];

/** Four services exchanging requests. */
export function ServiceMeshArt() {
  return (
    <AnimatedSvg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
      <path
        className="sa"
        strokeWidth="1"
        opacity=".4"
        fill="none"
        d={ROUTES.map((route) => route.path).join("")}
      />
      <g fill="none" className="sa" strokeWidth="2">
        <circle cx="40" cy="100" r="15" />
        <circle cx="100" cy="50" r="15" />
        <circle cx="100" cy="150" r="15" />
        <circle cx="160" cy="100" r="15" />
      </g>
      {ROUTES.map(({ path, r, dur, begin }) => (
        <circle key={path} r={r} className="fh">
          <animateMotion dur={dur} begin={begin} repeatCount="indefinite" path={path} />
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur={dur}
            begin={begin}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </AnimatedSvg>
  );
}

/** A shield with a scan line sweeping across it. */
export function ShieldScanArt() {
  return (
    <AnimatedSvg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
      <path
        d="M100 30 160 50V90C160 130 130 160 100 175 70 160 40 130 40 90V50L100 30Z"
        fill="none"
        className="sa"
        strokeWidth="2"
        opacity=".5"
      />
      <path
        d="M100 45V160M55 60H145M65 130H135"
        fill="none"
        className="sa"
        strokeWidth="1"
        opacity=".3"
      />
      <rect x="40" width="120" height="4" rx="2" className="fh">
        <animate attributeName="y" values="34;160;34" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;.9;0;.9;0" dur="2.6s" repeatCount="indefinite" />
      </rect>
    </AnimatedSvg>
  );
}
