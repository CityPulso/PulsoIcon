import { createIcon } from "../runtime/createIcon.js";

export const Plug = createIcon("Plug", "plug", {
  nodes: [
    ["path", { d: "M12 22v-5" }, { r: "fade", d: 0.1, o: [12, 19.5] }],
    ["path", { d: "M15 8V2" }, { r: "bounce", y: -1, a: 2, o: [12, 9.5] }],
    ["path", { d: "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" }, { r: "bounce", y: -1, a: 2, o: [12, 9.5] }],
    ["path", { d: "M9 8V2" }, { r: "bounce", y: -1, a: 2, o: [12, 9.5] }],
  ],
});
