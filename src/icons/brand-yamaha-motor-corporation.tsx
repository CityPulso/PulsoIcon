import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "yamahamotorcorporation" (CC0-1.0). Yamaha Motor Corporation is a trademark of its owner.
export const BrandYamahaMotorCorporation = createIcon("BrandYamahaMotorCorporation", "brand-yamaha-motor-corporation", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    [
      "path",
      {
        d: "M12 10.5L12 7M10.5 3.5L10.5 5.5A1.5 1.5 0 0 0 13.5 5.5L13.5 3.5M13.3 12.75L16.33 14.5M20.11 14.95L18.38 13.95A1.5 1.5 0 0 0 16.88 16.55L18.61 17.55M10.7 12.75L7.67 14.5M5.39 17.55L7.12 16.55A1.5 1.5 0 0 0 5.62 13.95L3.89 14.95",
      },
      { r: "turn", d: 0.05, a: 60, o: [12, 12] },
    ],
    ["circle", { cx: "12", cy: "12", r: "1.5" }, { r: "pop", d: 0.2, o: [12, 12] }],
  ],
});
