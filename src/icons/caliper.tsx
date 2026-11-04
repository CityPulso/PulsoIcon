import { createIcon } from "../runtime/createIcon.js";

export const Caliper = createIcon("Caliper", "caliper", {
  nodes: [
    ["path", { d: "M3 4h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3" }, { r: "fade", o: [12, 6] }],
    ["path", { d: "M3 2v16l4 4V8" }, { r: "fade", o: [12, 6] }],
    ["path", { d: "M15 4v1.5M18 4v1.5" }, { r: "fade", o: [16.5, 5] }],
    ["path", { d: "M12 3v14l-4 4M12 3h-2v6h2" }, { r: "slide", x: 1, a: 2.5, o: [10, 12] }],
  ],
});
