import { icon } from "../icon.js";

export const LibraryBig = icon("LibraryBig", "library-big", {
  nodes: [
    ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1" }, { r: "press", a: 0.05, o: [7, 21] }],
    ["path", { d: "M7 3v18" }, { r: "press", a: 0.05, o: [7, 21] }],
    ["path", { d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" }, { r: "turn", d: 0.1, a: -8, o: [20.5, 21] }],
  ],
});
