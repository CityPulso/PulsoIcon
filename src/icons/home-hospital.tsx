import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "home-hospital" (MIT, Copyright (c) 2021 Luca Burgio).
export const HomeHospital = createIcon("HomeHospital", "home-hospital", {
  nodes: [
    ["path", { d: "M3 9.5L12 4L21 9.5" }, { r: "float", a: 1 }],
    ["path", { d: "M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" }],
    ["path", { d: "M13.6667 17H10.3333V14.6667H8V11.3333H10.3333V9H13.6667V11.3333H16V14.6667H13.6667V17Z" }, { r: "beat", o: [12, 13] }],
  ],
});
