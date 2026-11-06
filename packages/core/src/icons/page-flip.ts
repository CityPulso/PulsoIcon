import { icon } from "../icon.js";

// Adapted from Iconoir "page-flip" (MIT, Copyright (c) 2021 Luca Burgio).
export const PageFlip = icon("PageFlip", "page-flip", {
  nodes: [
    ["path", { d: "M12 11H14.5H17" }, { r: "draw", d: 0.15 }],
    ["path", { d: "M12 7H14.5H17" }, { r: "draw", d: 0.1 }],
    ["path", { d: "M8 15V3.6C8 3.26863 8.26863 3 8.6 3H20.4C20.7314 3 21 3.26863 21 3.6V17C21 19.2091 19.2091 21 17 21V21" }],
    [
      "path",
      { d: "M5 15H8H12.4C12.7314 15 13.0031 15.2668 13.0298 15.5971C13.1526 17.1147 13.7812 21 17 21H8H6C4.34315 21 3 19.6569 3 18V17C3 15.8954 3.89543 15 5 15Z" },
      { r: "fold", o: [13, 18] },
    ],
  ],
});
