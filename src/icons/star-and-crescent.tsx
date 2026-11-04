import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "star-and-crescent" (MIT, Copyright (c) 2023 Phosphor Icons).

export const StarAndCrescent = createIcon("StarAndCrescent", "star-and-crescent", {
  nodes: [
    ["path", { d: "M13.5 4a8.5 8.5 0 1 0 0 16a8 8 0 0 1 0-16" }, { r: "swing", a: 10, o: [10, 12] }],
    ["path", { d: "M18.5 8.6L19.38 10.79L21.73 10.95L19.93 12.46L20.5 14.75L18.5 13.5L16.5 14.75L17.07 12.46L15.27 10.95L17.62 10.79z" }, { r: "twinkle", d: 0.1, o: [18.5, 12] }],
  ],
});
