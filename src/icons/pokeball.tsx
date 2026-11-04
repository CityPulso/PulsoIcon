import { createIcon } from "../runtime/createIcon.js";

export const Pokeball = createIcon("Pokeball", "pokeball", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "ring", a: 14, o: [12, 22] }],
    ["path", { d: "M2 12h7" }, { r: "ring", a: 14, o: [12, 22] }],
    ["path", { d: "M15 12h7" }, { r: "ring", a: 14, o: [12, 22] }],
    ["circle", { cx: "12", cy: "12", r: "3" }, { r: "ring", a: 14, o: [12, 22] }],
  ],
});
