import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "accuweather" (CC0-1.0). AccuWeather is a trademark of its owner.
export const BrandAccuweather = createIcon("BrandAccuweather", "brand-accuweather", {
  nodes: [
    [
      "polygon",
      {
        points:
          "12 1.5 13.89 3.71 16.56 2.54 17.3 5.35 20.21 5.45 19.66 8.31 22.24 9.66 20.5 12 22.24 14.34 19.66 15.69 20.21 18.55 17.3 18.65 16.56 21.46 13.89 20.29 12 22.5 10.11 20.29 7.44 21.46 6.7 18.65 3.79 18.55 4.34 15.69 1.76 14.34 3.5 12 1.76 9.66 4.34 8.31 3.79 5.45 6.7 5.35 7.44 2.54 10.11 3.71",
      },
      { r: "spin", a: 51.43, o: [12, 12] },
    ],
    ["circle", { cx: "12", cy: "12", r: "5" }, { r: "pulse", a: 0.1, o: [12, 12] }],
  ],
});
