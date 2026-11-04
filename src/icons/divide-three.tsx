import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "divide-three" (MIT, Copyright (c) 2021 Luca Burgio).
export const DivideThree = createIcon("DivideThree", "divide-three", {
  nodes: [
    ["path", { d: "M12 21V17C12 14.2386 9.76142 12 7 12H3" }, { r: "draw", d: 0, o: [7, 16] }],
    ["path", { d: "M12 21V17C12 14.2386 14.2386 12 17 12H21" }, { r: "draw", d: 0, o: [17, 16] }],
    ["path", { d: "M12 2.00005V22" }],
    ["path", { d: "M6 8C4.4379 9.5621 3.5621 10.4379 2 12C3.5621 13.5621 4.4379 14.4379 6 16" }, { r: "slide", d: 0.15, x: -1, a: 1.5, o: [4, 12] }],
    ["path", { d: "M16 6C14.4379 4.4379 13.5621 3.5621 12 2C10.4379 3.5621 9.5621 4.4379 8 6" }, { r: "slide", d: 0.15, y: -1, a: 1.5, o: [12, 4] }],
    ["path", { d: "M18 8C19.5621 9.5621 20.4379 10.4379 22 12C20.4379 13.5621 19.5621 14.4379 18 16" }, { r: "slide", d: 0.15, x: 1, a: 1.5, o: [20, 12] }],
  ],
});
