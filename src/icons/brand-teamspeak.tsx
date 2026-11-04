import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "teamspeak" (CC0-1.0). TeamSpeak is a trademark of its owner.
export const BrandTeamspeak = createIcon("BrandTeamspeak", "brand-teamspeak", {
  nodes: [
    ["path", { d: "M18.5 5A9 9 0 0 0 4 10" }, { r: "draw" }],
    ["path", { d: "M18.5 19A9 9 0 0 1 6 18" }, { r: "draw" }],
    ["circle", { cx: "5", cy: "14", r: "2.5" }, { r: "pop", d: 0.1, o: [5, 14] }],
    ["path", { d: "M15 6c-1.5 1.5-1.5 3 0 4l-1.5 1.5 1.5 1c-.5 2 0 3.5 1.5 5" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M19 7.5c-1 1.5-1 3 0 4l-.5 1 .5 1c-.5 1.5-.5 2.5.5 4" }, { r: "draw", d: 0.3 }],
  ],
});
