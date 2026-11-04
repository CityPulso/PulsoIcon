import { createIcon } from "../runtime/createIcon.js";

export const Basketball = createIcon("Basketball", "basketball", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M12 2v20" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M2 12h20" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M5 5a10 10 0 0 1 0 14" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M19 5a10 10 0 0 0 0 14" }, { r: "roll", x: 1, a: 1.5, o: [12, 12] }],
  ],
});
