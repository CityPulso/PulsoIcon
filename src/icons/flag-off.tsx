import { createIcon } from "../runtime/createIcon.js";

export const FlagOff = createIcon("FlagOff", "flag-off", {
  nodes: [
    ["path", { d: "M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" }, { r: "swing", a: 6, o: [4, 22] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.15, o: [12, 12] }],
    ["path", { d: "M4 22V4" }, { r: "swing", a: 6, o: [4, 22] }],
    ["path", { d: "M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" }, { r: "swing", a: 6, o: [4, 22] }],
  ],
});
