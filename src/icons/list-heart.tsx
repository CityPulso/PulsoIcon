import { createIcon } from "../runtime/createIcon.js";

// Drawn after Phosphor Icons "list-heart" (MIT, Copyright (c) 2023 Phosphor Icons).
export const ListHeart = createIcon("ListHeart", "list-heart", {
  nodes: [
    ["path", { d: "M3 5h18" }, { r: "growX", o: [3, 12] }],
    ["path", { d: "M3 12h7" }, { r: "growX", d: 0.05, o: [3, 12] }],
    ["path", { d: "M3 19h7" }, { r: "growX", d: 0.1, o: [3, 12] }],
    ["path", { d: "M17 21l-3.4-3.6a2.4 2.4 0 0 1 3.4-3.4 2.4 2.4 0 0 1 3.4 3.4z" }, { r: "beat", d: 0.15, o: [17, 17.5] }],
  ],
});
