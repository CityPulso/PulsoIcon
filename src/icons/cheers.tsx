import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "cheers" (MIT, Copyright (c) 2023 Phosphor Icons).
export const Cheers = createIcon("Cheers", "cheers", {
  nodes: [
    ["path", { d: "M6.09 4.35L10.91 5.65L8.69 11.26A1.8 1.8 0 0 1 5.21 10.33Z" }, { r: "turn", a: 8, o: [4.8, 19] }],
    ["path", { d: "M6.48 12.53L4.75 19.01M2.33 18.36L7.16 19.65" }, { r: "turn", a: 8, o: [4.8, 19] }],
    ["path", { d: "M13.09 5.65L17.91 4.35L18.79 10.33A1.8 1.8 0 0 1 15.31 11.26Z" }, { r: "turn", a: -8, o: [19.2, 19] }],
    ["path", { d: "M17.52 12.53L19.25 19.01M16.84 19.65L21.67 18.36" }, { r: "turn", a: -8, o: [19.2, 19] }],
    ["path", { d: "M12 2v1.5M8 2l1 1M16 2l-1 1" }, { r: "twinkle", d: 0.25, o: [12, 2.5] }],
  ],
});
