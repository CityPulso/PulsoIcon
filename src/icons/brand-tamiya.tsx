import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "tamiya" (CC0-1.0). Tamiya is a trademark of its owner.
export const BrandTamiya = createIcon("BrandTamiya", "brand-tamiya", {
  nodes: [
    ["rect", { x: "2", y: "6.5", width: "20", height: "11" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M12 6.5v11" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["polygon", { points: "7 8.6 7.94 11.11 10.61 11.23 8.52 12.89 9.23 15.47 7 14 4.77 15.47 5.48 12.89 3.39 11.23 6.06 11.11" }, { r: "twinkle", d: 0.05, o: [7, 12] }],
    ["polygon", { points: "17 8.6 17.94 11.11 20.61 11.23 18.52 12.89 19.23 15.47 17 14 14.77 15.47 15.48 12.89 13.39 11.23 16.06 11.11" }, { r: "twinkle", d: 0.2, o: [17, 12] }],
  ],
});
