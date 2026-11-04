import { createIcon } from "../runtime/createIcon.js";

export const BrandMicrosoftAdmin = createIcon("BrandMicrosoftAdmin", "brand-microsoft-admin", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "7.5", height: "7.5" }, { r: "pop", o: [6.75, 6.75] }],
    ["rect", { x: "13.5", y: "3", width: "7.5", height: "7.5" }, { r: "pop", d: 0.06, o: [17.25, 6.75] }],
    ["rect", { x: "3", y: "13.5", width: "7.5", height: "7.5" }, { r: "pop", d: 0.06, o: [6.75, 17.25] }],
    ["circle", { cx: "17.25", cy: "17.25", r: "2" }, { r: "spin", a: 90, d: 0.1, o: [17.25, 17.25] }],
    [
      "path",
      { d: "M17.25 13v1.25M17.25 20.25v1.25M13 17.25h1.25M20.25 17.25h1.25M14.25 14.25l.9.9M19.35 19.35l.9.9M14.25 20.25l.9-.9M19.35 15.15l.9-.9" },
      { r: "spin", a: 90, d: 0.1, o: [17.25, 17.25] },
    ],
  ],
});
