import { createIcon } from "../runtime/createIcon.js";

export const Hat = createIcon("Hat", "hat", {
  nodes: [
    ["path", { d: "M6 15V9.5C6 7 7.5 5 9.5 5c1 0 1.5.7 2.5.7S13.5 5 14.5 5C16.5 5 18 7 18 9.5V15" }, { r: "lift", a: -8, o: [12, 15] }],
    ["path", { d: "M6 12h12" }, { r: "lift", a: -8, o: [12, 15] }],
    ["path", { d: "M6 14.5c-2.4.4-4 1.1-4 2C2 18 6.5 19.5 12 19.5S22 18 22 16.5c0-.9-1.6-1.6-4-2" }, { r: "lift", a: -8, o: [12, 15] }],
  ],
});
