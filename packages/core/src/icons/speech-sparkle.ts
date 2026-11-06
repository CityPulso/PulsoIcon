import { icon } from "../icon.js";

export const SpeechSparkle = icon("SpeechSparkle", "speech-sparkle", {
  nodes: [
    [
      "path",
      { d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" },
      { r: "wobble", a: 4, o: [7, 12] },
    ],
    ["path", { d: "M18 14a5.32 5.32 0 0 1 4-4a5.32 5.32 0 0 1-4-4a5.32 5.32 0 0 1-4 4a5.32 5.32 0 0 1 4 4" }, { r: "twinkle", d: 0.1, o: [18, 10] }],
  ],
});
