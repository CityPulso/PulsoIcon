import { icon } from "../icon.js";

// Adapted from Iconoir "people-tag" (MIT, Copyright (c) 2021 Luca Burgio).
export const PeopleTag = icon("PeopleTag", "people-tag", {
  nodes: [
    ["path", { d: "M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" }],
    ["path", { d: "M16.5 14.5C16.5 14.5 15 16.5 12 16.5C9 16.5 7.5 14.5 7.5 14.5" }, { r: "draw" }],
    ["path", { d: "M8.5 9.5h.01" }, { r: "blink", d: 0.2, o: [8.5, 9.5] }],
    ["path", { d: "M15.5 9.5h.01" }, { r: "blink", d: 0.2, o: [15.5, 9.5] }],
  ],
});
