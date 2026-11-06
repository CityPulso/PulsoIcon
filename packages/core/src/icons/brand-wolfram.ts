import { icon } from "../icon.js";

// Drawn after Simple Icons "wolfram" (CC0-1.0). Wolfram is a trademark of its owner.
export const BrandWolfram = icon("BrandWolfram", "brand-wolfram", {
  nodes: [
    [
      "polygon",
      {
        points:
          "12 2 13.92 6.1 16.82 5.37 17.02 8.36 21.51 8.91 18.2 12 19.8 14.53 17.02 15.64 17.88 20.09 13.92 17.9 12 20.2 10.08 17.9 6.12 20.09 6.98 15.64 4.2 14.53 5.8 12 2.49 8.91 6.98 8.36 7.18 5.37 10.08 6.1",
      },
      { r: "twinkle", a: 0.1, o: [12, 12] },
    ],
    ["polygon", { points: "12 9 14.85 11.07 13.76 14.43 10.24 14.43 9.15 11.07" }, { r: "spin", d: 0.1, a: 72, o: [12, 12] }],
    ["path", { d: "M12 9L12 2M14.85 11.07L21.51 8.91M13.76 14.43L17.88 20.09M10.24 14.43L6.12 20.09M9.15 11.07L2.49 8.91" }, { r: "draw", d: 0.2, o: [12, 12] }],
  ],
});
