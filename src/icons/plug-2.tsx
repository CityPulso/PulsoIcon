import { createIcon } from "../runtime/createIcon.js";

export const Plug2 = createIcon("Plug2", "plug-2", {
  nodes: [
    ["path", { d: "M9 2v6" }, { r: "bounce", y: -1, a: 2, o: [12, 9.5] }],
    ["path", { d: "M15 2v6" }, { r: "bounce", y: -1, a: 2, o: [12, 9.5] }],
    ["path", { d: "M12 17v5" }, { r: "fade", d: 0.1, o: [12, 19.5] }],
    ["path", { d: "M5 8h14" }, { r: "bounce", y: -1, a: 2, o: [12, 9.5] }],
    ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z" }, { r: "bounce", y: -1, a: 2, o: [12, 9.5] }],
  ],
});
