import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "apachekafka" (Apache-2.0). Apache Kafka is a trademark of its owner.
export const BrandApacheKafka = createIcon("BrandApacheKafka", "brand-apache-kafka", {
  nodes: [
    ["circle", { cx: "7", cy: "4", r: "2" }, { r: "pop", d: 0.1, o: [7, 4] }],
    ["circle", { cx: "7", cy: "12", r: "2.5" }, { r: "pulse", o: [7, 12] }],
    ["circle", { cx: "7", cy: "20", r: "2" }, { r: "pop", d: 0.15, o: [7, 20] }],
    ["circle", { cx: "17", cy: "7", r: "2" }, { r: "pop", d: 0.2, o: [17, 7] }],
    ["circle", { cx: "17", cy: "17", r: "2" }, { r: "pop", d: 0.25, o: [17, 17] }],
    ["path", { d: "M7 6v3.5M7 14.5V18M9.2 10.8l5.9-3M9.2 13.2l5.9 3" }, { r: "draw", d: 0.05 }],
  ],
});
