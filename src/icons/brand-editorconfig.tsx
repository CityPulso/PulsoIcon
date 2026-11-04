import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "editorconfig" (CC0-1.0). EditorConfig is a trademark of its owner.
export const BrandEditorconfig = createIcon("BrandEditorconfig", "brand-editorconfig", {
  nodes: [
    ["circle", { cx: "6", cy: "6.5", r: "3" }],
    ["circle", { cx: "18", cy: "6.5", r: "3" }],
    ["path", { d: "M7.5 9.5C7 15 9 19.5 12 21c3-1.5 5-6 4.5-11.5" }, { r: "wobble", a: 6, o: [12, 14] }],
    ["path", { d: "M9.5 11.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 1 0 0-3.5M14.5 11.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 1 0 0-3.5M11.25 13h1.5" }, { r: "wobble", a: 6, o: [12, 14] }],
  ],
});
