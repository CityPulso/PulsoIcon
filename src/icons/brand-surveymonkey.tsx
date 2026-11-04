import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "surveymonkey" (CC0-1.0). SurveyMonkey is a trademark of its owner.
export const BrandSurveymonkey = createIcon("BrandSurveymonkey", "brand-surveymonkey", {
  nodes: [
    ["path", { d: "M6 19v-5a6 6 0 0 1 12 0v5" }, { r: "tilt", a: 6, o: [12, 19] }],
    ["path", { d: "M9.5 19v-2a2.5 2.5 0 0 1 5 0v2" }, { r: "tilt", a: 6, o: [12, 19] }],
    ["circle", { cx: "4", cy: "14.5", r: "2" }, { r: "pop", d: 0.05, o: [4, 14.5] }],
    ["circle", { cx: "20", cy: "14.5", r: "2" }, { r: "pop", d: 0.1, o: [20, 14.5] }],
    ["path", { d: "M12 8c0-2 1-3.5 3-4" }, { r: "swing", d: 0.1, a: 18, o: [12, 8] }],
  ],
});
