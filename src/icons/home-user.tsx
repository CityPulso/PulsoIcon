import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "home-user" (MIT, Copyright (c) 2021 Luca Burgio).
export const HomeUser = createIcon("HomeUser", "home-user", {
  nodes: [
    ["path", { d: "M2.5 9.5L12 4L21.5 9.5" }, { r: "float", a: 1 }],
    ["path", { d: "M7 21V20C7 17.2386 9.23858 15 12 15V15C14.7614 15 17 17.2386 17 20V21" }, { r: "rise", a: 2 }],
    ["path", { d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" }, { r: "rise", d: 0.1, a: 2 }],
  ],
});
