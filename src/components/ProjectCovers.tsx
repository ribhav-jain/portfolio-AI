import type { ComponentType, ReactNode } from "react";
import type { CoverName } from "../data/projects.ts";
import { AnimatedSvg } from "./AnimatedSvg.tsx";

/* Animated cover illustrations for the project tiles, drawn on a 400×250 canvas.
   Colours come from the .sa/.sh/.fa/.fh/.fs helpers in styles/ui.css, so they follow the theme. */

function Canvas({ children }: { children: ReactNode }) {
  return (
    <AnimatedSvg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      {children}
    </AnimatedSvg>
  );
}

const round = (value: number) => Math.round(value * 10) / 10;

/** docsonar: a radar sweep picking up documents. */
function Radar() {
  const blips = [
    { x: 246, y: 72, begin: ".5s" },
    { x: 286, y: 118, begin: "1.05s" },
    { x: 254, y: 168, begin: "1.6s" },
    { x: 138, y: 162, begin: "2.55s" },
    { x: 112, y: 104, begin: "3.15s" },
    { x: 152, y: 66, begin: "3.65s" },
  ];
  return (
    <Canvas>
      <g fill="none" className="sa" strokeWidth="1.2">
        <circle cx="200" cy="125" r="34" opacity=".5" />
        <circle cx="200" cy="125" r="68" opacity=".34" />
        <circle cx="200" cy="125" r="102" opacity=".2" />
        <path d="M200 15V235M70 125H330" opacity=".14" />
      </g>
      <circle cx="200" cy="125" r="8" fill="none" className="sh" strokeWidth="1.5">
        <animate attributeName="r" values="8;104" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values=".85;0" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <g>
        <path d="M200 125 200 23A102 102 0 0 0 128 53Z" className="fh" opacity=".14" />
        <path d="M200 125V23" className="sh" strokeWidth="2" strokeLinecap="round" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 125"
          to="360 200 125"
          dur="4s"
          repeatCount="indefinite"
        />
      </g>
      <g className="fh">
        {blips.map(({ x, y, begin }) => (
          <rect key={begin} x={x} y={y} width="12" height="15" rx="2.5">
            <animate
              attributeName="opacity"
              values=".2;1;.2;.2"
              dur="4s"
              begin={begin}
              repeatCount="indefinite"
            />
          </rect>
        ))}
        <circle cx="200" cy="125" r="4.5" />
      </g>
    </Canvas>
  );
}

/** pocketcade: a screen of game tiles lighting up in turn, above a controller. */
function Arcade() {
  const cells = [56, 87, 118].flatMap((y) => [128, 158, 188, 218, 248].map((x) => ({ x, y })));
  return (
    <Canvas>
      <rect
        x="112"
        y="40"
        width="176"
        height="118"
        rx="14"
        fill="none"
        className="sa"
        strokeWidth="1.5"
        opacity=".55"
      />
      <g className="fa" opacity=".16">
        {cells.map(({ x, y }) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="24" height="24" rx="6" />
        ))}
      </g>
      <g className="fh">
        {cells.map(({ x, y }, index) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="24" height="24" rx="6" opacity="0">
            <animate
              attributeName="opacity"
              values="0;.9;0;0"
              keyTimes="0;.06;.14;1"
              dur="6s"
              begin={`${round(index * 0.4)}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
      </g>
      <g fill="none" className="sa" strokeWidth="1.5" opacity=".6">
        <path d="M140 186h12v-12h12v12h12v12h-12v12h-12v-12h-12Z" />
        <circle cx="238" cy="198" r="9" />
        <circle cx="264" cy="184" r="9" />
      </g>
    </Canvas>
  );
}

/** Face Recognition Login: face landmarks inside a viewfinder with a scan line. */
function FaceScan() {
  const landmarks = [
    { cx: 178, cy: 100, begin: "0s" },
    { cx: 222, cy: 100, begin: ".25s" },
    { cx: 200, cy: 132, begin: ".5s" },
    { cx: 182, cy: 160, begin: ".75s" },
    { cx: 218, cy: 160, begin: "1s" },
  ];
  return (
    <Canvas>
      <path
        d="M122 82V62H142M278 82V62H258M122 168V188H142M278 168V188H258"
        fill="none"
        className="sa"
        strokeWidth="2"
        opacity=".7"
      />
      <ellipse
        cx="200"
        cy="125"
        rx="56"
        ry="70"
        fill="none"
        className="sa"
        strokeWidth="1.5"
        opacity=".45"
      />
      <path
        d="M178 100H222M200 132 182 160H218L200 132M178 100 200 132 222 100"
        fill="none"
        className="sh"
        strokeWidth=".8"
        opacity=".5"
      />
      <g className="fh">
        {landmarks.map(({ cx, cy, begin }) => (
          <circle key={begin} cx={cx} cy={cy} r="3">
            <animate
              attributeName="opacity"
              values=".3;1;.3"
              dur="2s"
              begin={begin}
              repeatCount="indefinite"
            />
          </circle>
        ))}
        <rect x="122" width="156" height="2.5" rx="1.25">
          <animate attributeName="y" values="60;190;60" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;.9;0;.9;0" dur="3s" repeatCount="indefinite" />
        </rect>
      </g>
    </Canvas>
  );
}

/** AI Knowledge Base: a stack of documents feeding chunks into an index. */
function Documents() {
  return (
    <Canvas>
      <g className="sa fs" strokeWidth="1.5">
        <rect x="70" y="78" width="72" height="94" rx="6" opacity=".6" />
        <rect x="79" y="90" width="72" height="94" rx="6" opacity=".75" />
        <rect x="88" y="102" width="72" height="94" rx="6" />
      </g>
      <path
        d="M100 124h46M100 139h32M100 154h46M100 169h28"
        className="sa"
        strokeWidth="2"
        opacity=".45"
        strokeLinecap="round"
      />
      <path d="M168 125H292" className="sa" strokeWidth="1" opacity=".4" strokeDasharray="4 4" />
      <circle cx="320" cy="125" r="26" className="fa" opacity=".1" />
      <circle cx="320" cy="125" r="14" fill="none" className="sh" strokeWidth="1.5" />
      <circle cx="320" cy="125" r="4" className="fh" />
      <g className="fh">
        {["0s", ".65s", "1.3s"].map((begin) => (
          <circle key={begin} r="3.5" cy="125">
            <animate
              attributeName="cx"
              values="168;306"
              dur="2s"
              begin={begin}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              begin={begin}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </Canvas>
  );
}

/** Lightweight API Gateway: requests from three clients routed through one gateway. */
function Gateway() {
  const routes = [
    { path: "M72 72 200 125 328 125", begin: "0s" },
    { path: "M72 125 200 125 328 178", begin: ".6s" },
    { path: "M72 178 200 125 328 72", begin: "1.2s" },
  ];
  return (
    <Canvas>
      <path
        d="M84 72 176 125M84 125H176M84 178 176 125M224 125 316 72M224 125H316M224 125 316 178"
        className="sa"
        strokeWidth="1"
        opacity=".4"
      />
      <rect x="176" y="100" width="48" height="50" rx="10" className="fa" opacity=".14" />
      <rect
        x="176"
        y="100"
        width="48"
        height="50"
        rx="10"
        fill="none"
        className="sh"
        strokeWidth="1.5"
      />
      <text
        x="200"
        y="129"
        textAnchor="middle"
        fontSize="11"
        fontFamily="ui-monospace,Menlo,Consolas,monospace"
        className="fh"
      >
        API
      </text>
      <g fill="none" className="sa" strokeWidth="1.5">
        {[72, 328].flatMap((cx) =>
          [72, 125, 178].map((cy) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" />),
        )}
      </g>
      <g className="fh">
        {routes.map(({ path, begin }) => (
          <circle key={path} r="3.5">
            <animateMotion dur="2.4s" begin={begin} repeatCount="indefinite" path={path} />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="2.4s"
              begin={begin}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </Canvas>
  );
}

/** AI Personal Finance: rising bars with a trend line and a projected continuation. */
function Finance() {
  const trend = "M80 168 110 152 140 158 170 122 200 112 230 84";
  return (
    <Canvas>
      <path d="M70 190H340" className="sa" strokeWidth="1" opacity=".4" />
      <g className="fa" opacity=".26">
        {[34, 48, 62, 76, 90].map((height, index) => (
          <rect
            key={height}
            x={92 + index * 30}
            y={190 - height}
            width="16"
            height={height}
            rx="3"
          />
        ))}
      </g>
      <path
        d={trend}
        fill="none"
        className="sh"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M230 84 270 68 310 44"
        fill="none"
        className="sh"
        strokeWidth="2.5"
        strokeDasharray="5 5"
        opacity=".55"
      />
      <circle r="5" className="fs sh" strokeWidth="2">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          keyPoints="0;1;0"
          keyTimes="0;.5;1"
          calcMode="linear"
          path={trend}
        />
      </circle>
    </Canvas>
  );
}

/** Smart Inbox Classifier: envelopes dropping into three trays. */
function Inbox() {
  const envelopes = [
    { x: 111, begin: "0s" },
    { x: 201, begin: ".7s" },
    { x: 291, begin: "1.4s" },
  ];
  return (
    <Canvas>
      <path
        d="M92 172V204H154V172M182 172V204H244V172M272 172V204H334V172"
        fill="none"
        className="sa"
        strokeWidth="1.5"
        opacity=".55"
      />
      <g className="fh">
        {envelopes.map(({ x, begin }) => (
          <g key={x} opacity="0">
            <rect x={x} y="52" width="24" height="17" rx="2" />
            <path d={`M${x} 52l12 9 12-9`} fill="none" stroke="var(--solid)" strokeWidth="1" />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;0 118"
              dur="2.4s"
              begin={begin}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              dur="2.4s"
              begin={begin}
              repeatCount="indefinite"
            />
          </g>
        ))}
      </g>
    </Canvas>
  );
}

/** Voice Command Assistant: a microphone and a waveform. */
function Voice() {
  const peaks = [26, 46, 70, 40, 62, 34, 54, 44, 66, 30]; // tallest height of each bar
  const centre = 125;
  return (
    <Canvas>
      <circle cx="96" cy={centre} r="26" className="fa" opacity=".12" />
      <circle cx="96" cy={centre} r="26" fill="none" className="sh" strokeWidth="1.5">
        <animate attributeName="r" values="26;42" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values=".6;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <g fill="none" className="sh" strokeWidth="1.5">
        <rect x="88" y="112" width="16" height="22" rx="8" />
        <path d="M84 128a12 12 0 0 0 24 0M96 140v6" />
      </g>
      <g className="fh" opacity=".75">
        {peaks.map((peak, index) => {
          const rest = round(peak * 0.4);
          const begin = `${index / 10}s`;
          return (
            <rect key={index} x={150 + index * 19} width="8" rx="4">
              <animate
                attributeName="height"
                values={`${rest};${peak};${rest}`}
                dur="1.2s"
                begin={begin}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`${round(centre - rest / 2)};${centre - peak / 2};${round(centre - rest / 2)}`}
                dur="1.2s"
                begin={begin}
                repeatCount="indefinite"
              />
            </rect>
          );
        })}
      </g>
    </Canvas>
  );
}

const COVERS: Record<CoverName, ComponentType> = {
  radar: Radar,
  arcade: Arcade,
  faceScan: FaceScan,
  documents: Documents,
  gateway: Gateway,
  finance: Finance,
  inbox: Inbox,
  voice: Voice,
};

export function ProjectCover({ name }: { name: CoverName }) {
  const Cover = COVERS[name];
  return <Cover />;
}
