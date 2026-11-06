import { icon } from "../icon.js";

// Adapted from Tabler Icons "link-minus" (MIT, Copyright (c) 2020-2026 Paweł Kuna).
export const LinkMinus = icon("LinkMinus", "link-minus", {
  nodes: [
    ["path", { d: "M9 15l6 -6" }, { r: "draw" }],
    ["path", { d: "M11 6l.463 -.536a5 5 0 1 1 7.071 7.072l-.534 .464" }, { r: "slide", x: 1, y: -1, a: 1 }],
    ["path", { d: "M12.603 18.534a5.07 5.07 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" }, { r: "slide", x: -1, y: 1, a: 1 }],
    ["path", { d: "M16 19h6" }, { r: "growX", d: 0.2, o: [19, 19] }],
  ],
});
