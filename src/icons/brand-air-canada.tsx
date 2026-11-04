import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "aircanada" (CC0-1.0). Air Canada is a trademark of its owner.
export const BrandAirCanada = createIcon("BrandAirCanada", "brand-air-canada", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    [
      "path",
      {
        d: "M12 5.5 13.3 8 14.8 7.3 14.3 10.5 16.3 8.8 16.8 10.1 18.2 9.8 17.5 12.1 18.2 12.6 15.3 15 15.6 16 12.4 15.6 11.6 15.6 8.4 16 8.7 15 5.8 12.6 6.5 12.1 5.8 9.8 7.2 10.1 7.7 8.8 9.7 10.5 9.2 7.3 10.7 8z",
      },
      { r: "sway", a: 8, o: [12, 18.5] },
    ],
    ["path", { d: "M12 15.8v2.7" }, { r: "sway", a: 8, o: [12, 18.5] }],
  ],
});
