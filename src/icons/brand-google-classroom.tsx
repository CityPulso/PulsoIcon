import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "googleclassroom" (CC0-1.0). Google Classroom is a trademark of its owner.
export const BrandGoogleClassroom = createIcon("BrandGoogleClassroom", "brand-google-classroom", {
  nodes: [
    ["rect", { x: "2", y: "3", width: "20", height: "17", rx: "2" }],
    ["circle", { cx: "12", cy: "9", r: "2" }, { r: "bounce", d: 0.05, x: 0, y: -1, a: 1, o: [12, 9] }],
    ["path", { d: "M8.5 15a3.5 3.5 0 0 1 7 0" }, { r: "bounce", d: 0.05, x: 0, y: -1, a: 1, o: [12, 14] }],
    ["path", { d: "M6.5 10.5h.01M17.5 10.5h.01" }, { r: "bounce", d: 0.15, x: 0, y: -1, a: 1, o: [12, 10.5] }],
    ["path", { d: "M14.5 20v-2h4v2" }, { r: "draw", d: 0.25, o: [16.5, 19] }],
  ],
});
