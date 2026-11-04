import { createIcon } from "../runtime/createIcon.js";

export const Utensils = createIcon("Utensils", "utensils", {
  nodes: [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }, { r: "turn", a: -8, o: [7, 22] }],
    ["path", { d: "M7 2v20" }, { r: "turn", a: -8, o: [7, 22] }],
    ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }, { r: "turn", d: 0.08, a: 8, o: [18, 22] }],
  ],
});
