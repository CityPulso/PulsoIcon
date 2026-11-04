import { createIcon } from "../runtime/createIcon.js";

export const LuggageCart = createIcon("LuggageCart", "luggage-cart", {
  nodes: [
    ["path", { d: "M3 3h2v14h15" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["rect", { width: "11", height: "5", x: "8", y: "9", rx: "1" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M10 9V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M12 5V3h3v2" }, { r: "slide", x: 1, a: 1.5, o: [12, 12] }],
    ["circle", { cx: "8", cy: "20", r: "1.5" }, { r: "roll", x: 1, a: 1.5, o: [8, 20] }],
    ["circle", { cx: "17", cy: "20", r: "1.5" }, { r: "roll", x: 1, a: 1.5, o: [17, 20] }],
  ],
});
