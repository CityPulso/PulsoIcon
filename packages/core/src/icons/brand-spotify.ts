import { icon } from "../icon.js";

export const BrandSpotify = icon("BrandSpotify", "brand-spotify", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 9.5c3.5-1 7.5-.6 10.5 1" }, { r: "draw", d: 0.05, o: [12, 9.5] }],
    ["path", { d: "M7.5 12.8c3-.8 6-.5 8.5.9" }, { r: "draw", d: 0.13, o: [12, 12.8] }],
    ["path", { d: "M8 16c2.4-.6 4.6-.4 6.5.6" }, { r: "draw", d: 0.21, o: [11.5, 16] }],
  ],
});
