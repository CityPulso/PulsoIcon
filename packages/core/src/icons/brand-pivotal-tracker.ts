import { icon } from "../icon.js";

// Drawn after Simple Icons "pivotaltracker" (CC0-1.0). Pivotal Tracker is a trademark of its owner.

export const BrandPivotalTracker = icon("BrandPivotalTracker", "brand-pivotal-tracker", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "2.5" }, { r: "spin", a: 120, o: [12, 12] }],
    [
      "path",
      { d: "M14.5 12L17.87 15.81M13.25 14.17L11.63 18.99M10.75 14.17L5.76 15.18M9.5 12L6.13 8.19M10.75 9.83L12.37 5.01M13.25 9.83L18.24 8.82" },
      { r: "spin", a: 120, o: [12, 12] },
    ],
  ],
});
