import { createIcon } from "../runtime/createIcon.js";

export const Sword = createIcon("Sword", "sword", {
  nodes: [
    ["path", { d: "m11 19-6-6" }, { r: "swing", a: 12, o: [5, 19] }],
    ["path", { d: "m5 21-2-2" }, { r: "swing", a: 12, o: [5, 19] }],
    ["path", { d: "m8 16-4 4" }, { r: "swing", a: 12, o: [5, 19] }],
    ["path", { d: "M9.5 17.5 20.414 6.586A2 2 0 0021 5.172V3h-2.172a2 2 0 00-1.414.586L6.5 14.5" }, { r: "swing", a: 12, o: [5, 19] }],
  ],
});
