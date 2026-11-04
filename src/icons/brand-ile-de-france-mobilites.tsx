import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "iledefrancemobilites" (CC0-1.0). Île-de-France Mobilités is a trademark of its owner.

export const BrandIleDeFranceMobilites = createIcon("BrandIleDeFranceMobilites", "brand-ile-de-france-mobilites", {
  nodes: [
    ["rect", { x: "2.5", y: "2.5", width: "19", height: "19", rx: "4" }, { r: "press", a: 0.05, o: [12, 12] }],
    ["circle", { cx: "13.5", cy: "7", r: "1.5" }, { r: "float", a: 2, d: 0.05, o: [13.5, 7] }],
    ["path", { d: "M6.5 12.5c2.5-2 7-2.5 11-.5" }, { r: "float", a: 2, d: 0.1, o: [12, 12] }],
    ["path", { d: "M12 11.5 8 18M12 11.5l4.5 6.5" }, { r: "float", a: 2, d: 0.1, o: [12, 15] }],
  ],
});
