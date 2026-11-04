import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "neo4j" (CC0-1.0). Neo4j is a trademark of its owner.
export const BrandNeo4j = createIcon("BrandNeo4j", "brand-neo4j", {
  nodes: [
    ["circle", { cx: "4.5", cy: "8", r: "1.5" }, { r: "pop", d: 0.1, o: [4.5, 8] }],
    ["circle", { cx: "4.5", cy: "20", r: "1.5" }, { r: "pop", d: 0.2, o: [4.5, 20] }],
    ["path", { d: "M5.8 9l2.4 3.4M5.8 19l2.4-3.4" }],
    ["circle", { cx: "10", cy: "14", r: "2.5" }, { r: "pulse", o: [10, 14] }],
    ["path", { d: "M12 12.5V8a4.5 4.5 0 0 1 9 0v12" }, { r: "draw", d: 0.15 }],
  ],
});
