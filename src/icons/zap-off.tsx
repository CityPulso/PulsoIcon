import { createIcon } from "../runtime/createIcon.js";

export const ZapOff = createIcon("ZapOff", "zap-off", {
  nodes: [
    ["path", { d: "M10.768 5.111 13.44 2.44a1.5 1.5 0 012.474 1.561l-1.633 4.625" }, { r: "flicker", o: [12, 12] }],
    ["path", { d: "m18.889 13.232.672-.672A1.5 1.5 0 0018.5 10h-2.844" }, { r: "flicker", o: [12, 12] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
    ["path", { d: "m7.94 7.94-3.5 3.499A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l5.5-5.5" }, { r: "flicker", o: [12, 12] }],
  ],
});
