import { createIcon } from "../runtime/createIcon.js";

export const PeerToPeer = createIcon("PeerToPeer", "peer-to-peer", {
  nodes: [
    ["circle", { cx: "6", cy: "13", r: "2" }, { r: "pop", o: [6, 17] }],
    ["path", { d: "M2 21a4 4 0 0 1 8 0" }, { r: "pop", o: [6, 17] }],
    ["circle", { cx: "18", cy: "13", r: "2" }, { r: "pop", d: 0.1, o: [18, 17] }],
    ["path", { d: "M14 21a4 4 0 0 1 8 0" }, { r: "pop", d: 0.1, o: [18, 17] }],
    ["path", { d: "M8 4h8" }, { r: "slide", d: 0.15, x: 1, a: 1.5, o: [12, 4] }],
    ["path", { d: "m14.5 2.5 1.5 1.5-1.5 1.5" }, { r: "slide", d: 0.15, x: 1, a: 1.5, o: [12, 4] }],
    ["path", { d: "M16 8.5H8" }, { r: "slide", d: 0.25, x: -1, a: 1.5, o: [12, 8.5] }],
    ["path", { d: "m9.5 7-1.5 1.5 1.5 1.5" }, { r: "slide", d: 0.25, x: -1, a: 1.5, o: [12, 8.5] }],
  ],
});
