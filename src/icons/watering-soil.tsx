import { createIcon } from "../runtime/createIcon.js";

export const WateringSoil = createIcon("WateringSoil", "watering-soil", {
  nodes: [
    ["path", { d: "M2 15q2.5-2 5 0t5 0 5 0 5 0v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z" }, { r: "press", a: 0.05, o: [12, 21] }],
    ["path", { d: "M12 2c-.6 1.6-2.5 2.6-2.5 4.5a2.5 2.5 0 0 0 5 0C14.5 4.6 12.6 3.6 12 2Z" }, { r: "drop", d: 0, a: 3, o: [12, 6] }],
    ["path", { d: "M6 7c-.4 1-1.5 1.7-1.5 3a1.5 1.5 0 0 0 3 0c0-1.3-1.1-2-1.5-3Z" }, { r: "drop", d: 0.12, a: 3, o: [6, 9] }],
    ["path", { d: "M18 7c-.4 1-1.5 1.7-1.5 3a1.5 1.5 0 0 0 3 0c0-1.3-1.1-2-1.5-3Z" }, { r: "drop", d: 0.24, a: 3, o: [18, 9] }],
    ["path", { d: "M7 18h.01" }, { r: "pop", d: 0.35, o: [7, 18] }],
    ["path", { d: "M17 18h.01" }, { r: "pop", d: 0.4, o: [17, 18] }],
  ],
});
