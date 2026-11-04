import { createIcon } from "../runtime/createIcon.js";

// Adapted from Hugeicons "perplexity-ai" (MIT, Copyright (c) 2025 Hugeicons), re-stroked for this set.
export const BrandPerplexity = createIcon("BrandPerplexity", "brand-perplexity", {
  nodes: [
    ["path", { d: "M12 2v20" }, { r: "grow", o: [12, 22] }],
    ["path", { d: "M5 8V2.5L12 8l7-5.5V8" }, { r: "fold", d: 0.05, o: [12, 8] }],
    ["path", { d: "M6 16H3V8h18v8h-3" }, { r: "press", d: 0.05, a: 0.05, o: [12, 12] }],
    ["path", { d: "M12 8l-6 5.5V21l6-6 6 6v-7.5z" }, { r: "fold", d: 0.1, o: [12, 8] }],
  ],
});
