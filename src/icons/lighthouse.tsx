import { createIcon } from "../runtime/createIcon.js";

export const Lighthouse = createIcon("Lighthouse", "lighthouse", {
  nodes: [
    ["path", { d: "M12 3V2" }, { r: "pop", o: [12, 2.5] }],
    ["path", { d: "M16.066 16.865 7 22l2-11V6a3 3 0 016 0v5l2 11" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "m19.792 4.5.866-.5" }, { r: "flicker", d: 0.1, o: [12, 9] }],
    ["path", { d: "m19.797 13.5.866.5" }, { r: "flicker", d: 0.2, o: [12, 9] }],
    ["path", { d: "M21 9h1" }, { r: "flicker", d: 0.05, o: [12, 9] }],
    ["path", { d: "M3 9H2" }, { r: "flicker", d: 0.3, o: [12, 9] }],
    ["path", { d: "m4.203 13.5-.866.5" }, { r: "flicker", d: 0.25, o: [12, 9] }],
    ["path", { d: "M4.208 4.5 3.342 4" }, { r: "flicker", d: 0.15, o: [12, 9] }],
    ["path", { d: "M5.5 22h13" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "m7.932 16.875 7.377-4.178" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M8 11h8" }, { r: "press", a: 0.03, o: [12, 22] }],
    ["path", { d: "M8 7h8" }, { r: "press", a: 0.03, o: [12, 22] }],
  ],
});
