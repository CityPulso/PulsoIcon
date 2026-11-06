import { icon } from "../icon.js";

export const SirenOff = icon("SirenOff", "siren-off", {
  nodes: [
    ["path", { d: "M12 12v6" }, { r: "flicker", o: [12, 14.525] }],
    ["path", { d: "M12 2v1" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "M12.707 7.05a5 5 0 0 1 4.243 4.243" }, { r: "flicker", o: [12, 14.525] }],
    ["path", { d: "M17 17v1H7a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2" }, { r: "flicker", o: [12, 14.525] }],
    ["path", { d: "M18.5 4.5 18 5" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "M2 12h1" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "M21 12h1" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "M7 18v-6a5 5 0 0 1 1.464-3.536" }, { r: "flicker", o: [12, 14.525] }],
  ],
  solid: [
    ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6" }, { r: "flicker", o: [12, 14.525] }],
    ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }, { r: "flicker", o: [12, 14.525] }],
    ["path", { d: "M21 12h1", fill: "none" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "M18.5 4.5 18 5", fill: "none" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "M2 12h1", fill: "none" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "M12 2v1", fill: "none" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "m4.929 4.929.707.707", fill: "none" }, { r: "fade", o: [12, 7] }],
    ["path", { d: "M12 12v6" }, { r: "flicker", o: [12, 14.525] }, "line"],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
