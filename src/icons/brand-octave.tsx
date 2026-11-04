import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "octave" (CC0-1.0). Octave is a trademark of its owner.
export const BrandOctave = createIcon("BrandOctave", "brand-octave", {
  nodes: [
    ["path", { d: "M4.58 9A8 8 0 0 1 15.13 4.64" }],
    ["path", { d: "M19.36 8.87A8 8 0 0 1 19.36 15.13" }],
    ["path", { d: "M15.13 19.36A8 8 0 0 1 4.58 15" }],
    ["rect", { x: "2", y: "10", width: "4", height: "4", rx: "1" }, { r: "pop", d: 0.0, o: [4, 12] }],
    ["rect", { x: "15.66", y: "4.34", width: "4", height: "4", rx: "1" }, { r: "pop", d: 0.1, o: [17.66, 6.34] }],
    ["rect", { x: "15.66", y: "15.66", width: "4", height: "4", rx: "1" }, { r: "pop", d: 0.2, o: [17.66, 17.66] }],
  ],
});
