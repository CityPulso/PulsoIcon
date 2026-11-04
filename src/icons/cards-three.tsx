import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "cards-three" (MIT, Copyright (c) 2023 Phosphor Icons).
export const CardsThree = createIcon("CardsThree", "cards-three", {
  nodes: [
    ["rect", { x: "3", y: "10", width: "18", height: "11", rx: "2" }, { r: "press", a: 0.04, o: [12, 15.5] }],
    ["path", { d: "M5 6h14" }, { r: "slide", d: 0.06, y: 1, a: 1, o: [12, 6] }],
    ["path", { d: "M7 2.5h10" }, { r: "slide", d: 0.12, y: 1, a: 1, o: [12, 2.5] }],
  ],
});
