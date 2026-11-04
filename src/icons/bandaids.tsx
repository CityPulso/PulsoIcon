import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "bandaids" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Bandaids = createIcon("Bandaids", "bandaids", {
  nodes: [
    [
      "path",
      { d: "M7.76 12 3.88 8.12a3 3 0 0 1 4.24-4.24L12 7.76l3.88-3.88a3 3 0 0 1 4.24 4.24L16.24 12l3.88 3.88a3 3 0 0 1-4.24 4.24L12 16.24l-3.88 3.88a3 3 0 0 1-4.24-4.24z" },
      { r: "jelly", a: 0.1, o: [12, 12] },
    ],
    ["path", { d: "M12 12h.01" }, { r: "pop", d: 0.15, o: [12, 12] }],
  ],
});
