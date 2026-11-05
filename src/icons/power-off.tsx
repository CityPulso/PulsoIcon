import { createIcon } from "../runtime/createIcon.js";

export const PowerOff = createIcon("PowerOff", "power-off", {
  nodes: [
    ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }, { r: "fade", o: [11.971, 12.026] }],
    ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }, { r: "fade", o: [11.971, 12.026] }],
    ["path", { d: "M12 2v4" }, { r: "fade", o: [11.971, 12.026] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
  solid: [
    ["path", { d: "M12 2v10", fill: "none" }, { r: "fade", o: [11.971, 12.026] }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", fill: "none" }, { r: "fade", o: [11.971, 12.026] }],
    ["path", { d: "m2 2 20 20" }, { r: "draw", d: 0.1, o: [12, 12] }, "line"],
  ],
});
