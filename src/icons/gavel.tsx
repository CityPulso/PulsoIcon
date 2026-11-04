import { createIcon } from "../runtime/createIcon.js";

export const Gavel = createIcon("Gavel", "gavel", {
  nodes: [
    ["path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }, { r: "fade", o: [7.998, 16] }],
    ["path", { d: "m16 16 6-6" }, { r: "press", d: 0.2, a: 0.08, o: [19, 13] }],
    ["path", { d: "m21.5 10.5-8-8" }, { r: "turn", a: -25, o: [16, 16] }],
    ["path", { d: "m8 8 6-6" }, { r: "turn", a: -25, o: [16, 16] }],
    ["path", { d: "m8.5 7.5 8 8" }, { r: "turn", a: -25, o: [16, 16] }],
  ],
});
