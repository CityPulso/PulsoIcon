import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "juce" (CC0-1.0). JUCE is a trademark of its owner.
export const BrandJuce = createIcon("BrandJuce", "brand-juce", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    [
      "path",
      {
        d: "M14.31 12.96L18.47 14.68 M12.96 14.31L14.68 18.47 M11.04 14.31L9.32 18.47 M9.69 12.96L5.53 14.68 M9.69 11.04L5.53 9.32 M11.04 9.69L9.32 5.53 M12.96 9.69L14.68 5.53 M14.31 11.04L18.47 9.32",
      },
      { r: "roll", o: [12, 12] },
    ],
  ],
});
