import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "blueprint" (MIT, Copyright (c) 2023 Phosphor Icons).

export const Blueprint = createIcon("Blueprint", "blueprint", {
  nodes: [
    ["path", { d: "M6 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a2 2 0 0 1 0-4h2V6a2 2 0 0 0-4 0v12" }, { r: "press", a: 0.04, o: [12, 20] }],
    ["path", { d: "M12 9v8" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M16 9v8" }, { r: "draw", d: 0.2 }],
    ["path", { d: "M9.5 11.5h9" }, { r: "draw", d: 0.3 }],
    ["path", { d: "M9.5 14.5h9" }, { r: "draw", d: 0.4 }],
  ],
});
