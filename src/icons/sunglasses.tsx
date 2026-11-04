import { createIcon } from "../runtime/createIcon.js";

export const Sunglasses = createIcon("Sunglasses", "sunglasses", {
  nodes: [
    ["path", { d: "M2 9h20" }, { r: "drop", a: 3, o: [12, 12] }],
    ["path", { d: "M2.5 9h7.5l-.6 4.2A3 3 0 0 1 6.4 16H5.6a3 3 0 0 1-3-2.8z" }, { r: "drop", a: 3, o: [12, 12] }],
    ["path", { d: "M21.5 9H14l.6 4.2a3 3 0 0 0 3 2.8h.8a3 3 0 0 0 3-2.8z" }, { r: "drop", a: 3, o: [12, 12] }],
    ["path", { d: "m5 13 2-2" }, { r: "draw", d: 0.3, o: [6, 12] }],
    ["path", { d: "m16.5 13 2-2" }, { r: "draw", d: 0.35, o: [17.5, 12] }],
  ],
});
