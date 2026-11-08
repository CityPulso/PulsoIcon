/// <reference types="vite/client" />
import type { PulsoIcon } from "pulsoicon-react";

import { useState } from "react";
import { frame, frameData, MotionGlobalConfig } from "motion/react";
import { Bell } from "pulsoicon-react/icons/bell.js";
import { Calendar } from "pulsoicon-react/icons/calendar.js";
import { Clock } from "pulsoicon-react/icons/clock.js";
import { Heart } from "pulsoicon-react/icons/heart.js";
import { MapPin } from "pulsoicon-react/icons/map-pin.js";
import { PartyPopper } from "pulsoicon-react/icons/party-popper.js";
import { Rocket } from "pulsoicon-react/icons/rocket.js";
import { Search } from "pulsoicon-react/icons/search.js";
import { Send } from "pulsoicon-react/icons/send.js";
import { Settings } from "pulsoicon-react/icons/settings.js";
import { Sparkles } from "pulsoicon-react/icons/sparkles.js";
import { Trash } from "pulsoicon-react/icons/trash.js";
import { ICON_NAMES } from "pulsoicon-react/names.js";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

import logo from "../../logo.png";
import { iconPlaying } from "./timeline";

import "./page.css";

const ACCENT = "#f4875c";

const CARDS: { label: string; Icon: PulsoIcon; accent?: boolean; solid?: boolean }[] = [
  { label: "Bell", Icon: Bell, accent: true },
  { label: "Calendar", Icon: Calendar },
  { label: "Trash", Icon: Trash },
  { label: "Heart", Icon: Heart, accent: true, solid: true },
  { label: "Settings", Icon: Settings },
  { label: "Search", Icon: Search },
  { label: "Map pin", Icon: MapPin },
  { label: "Clock", Icon: Clock },
  { label: "Sparkles", Icon: Sparkles, accent: true, solid: true },
  { label: "Send", Icon: Send },
  { label: "Rocket", Icon: Rocket },
  { label: "Party", Icon: PartyPopper, accent: true },
];

declare global {
  interface Window {
    /** The recorder sets the loop time (ms) before it advances the clock and takes each frame. */
    setLoopTime: (ms: number) => void;
  }
}

// Motion reads its clock from the frame timestamp set below, not performance.now(), so an animation moves exactly one
// frame's worth per recorded frame however long the screenshot takes.
MotionGlobalConfig.useManualTiming = true;

function Page() {
  const [time, setTime] = useState(-1);
  window.setLoopTime = (ms) => {
    flushSync(() => setTime(ms));
    frameData.timestamp = ms;
    frame.update(() => {}, false, true);
  };

  return (
    <div className="frame">
      <div className="header">
        <div className="brand">
          <img src={logo} alt="" />
          <p>
            Pulso<span>Icon</span>
          </p>
        </div>
        <div className="tag">5 PLATFORMS / OPEN SOURCE</div>
      </div>
      <p className="lede">
        <strong>{ICON_NAMES.length.toLocaleString("en-US")}</strong> animated icons for React, Vue, Svelte, Compose and SwiftUI. Each one moves differently.
      </p>
      <div className="grid">
        {CARDS.map(({ label, Icon, accent, solid }, index) => {
          const playing = time >= 0 && iconPlaying(index, time);
          return (
            <div key={label} className="card" data-playing={playing || undefined}>
              <Icon size={52} strokeWidth={1.75} color={accent ? ACCENT : "#eef0f6"} solid={solid} autoAnimated={false} play={playing} />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <span className="motto">Every icon has its own motion.</span>
        <span>pulsoicon.com</span>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<Page />);
