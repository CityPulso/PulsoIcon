import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "huggingface" (CC0-1.0). Hugging Face is a trademark of its owner.

export const BrandHuggingFace = createIcon("BrandHuggingFace", "brand-hugging-face", {
  nodes: [
    ["circle", { cx: "12", cy: "10.5", r: "8" }, { r: "wobble", a: 6, o: [12, 10.5] }],
    ["path", { d: "M9 8.5h.01M15 8.5h.01" }, { r: "blink", d: 0.15, o: [12, 8.5] }],
    ["path", { d: "M8.5 12c1 2 2 3 3.5 3s2.5-1 3.5-3" }, { r: "wobble", a: 6, o: [12, 10.5] }],
    ["path", { d: "M2.5 17c1.2-1.6 3.2-1.6 4.3 0l1.7 3.5" }, { r: "swing", a: 15, o: [5, 20] }],
    ["path", { d: "M21.5 17c-1.2-1.6-3.2-1.6-4.3 0l-1.7 3.5" }, { r: "swing", a: -15, o: [19, 20] }],
  ],
});
