import { icon } from "../icon.js";

// Drawn after Simple Icons "newjapanprowrestling" (CC0-1.0). New Japan Pro-Wrestling is a trademark of its owner.
export const BrandNewJapanProWrestling = icon("BrandNewJapanProWrestling", "brand-new-japan-pro-wrestling", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    [
      "path",
      {
        d: "M12 5.5L13.29 7.17L15.25 6.37L15.54 8.46L17.63 8.75L16.83 10.71L18.5 12L16.83 13.29L17.63 15.25L15.54 15.54L15.25 17.63L13.29 16.83L12 18.5L10.71 16.83L8.75 17.63L8.46 15.54L6.37 15.25L7.17 13.29L5.5 12L7.17 10.71L6.37 8.75L8.46 8.46L8.75 6.37L10.71 7.17Z",
      },
      { r: "pulse", o: [12, 12] },
    ],
    ["path", { d: "M10 11h.01M14 11h.01" }, { r: "blink", d: 0.2, o: [12, 11] }],
    ["path", { d: "M10.5 14l1.5 1 1.5-1" }, { r: "draw", d: 0.25 }],
  ],
});
