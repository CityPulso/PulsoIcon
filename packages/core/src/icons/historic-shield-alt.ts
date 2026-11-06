import { icon } from "../icon.js";

// Adapted from Iconoir "historic-shield-alt" (MIT, Copyright (c) 2021 Luca Burgio).
export const HistoricShieldAlt = icon("HistoricShieldAlt", "historic-shield-alt", {
  nodes: [
    [
      "path",
      {
        d: "M11.7317 21.8658L6.21115 19.1056C4.85601 18.428 4 17.043 4 15.5279V2.6C4 2.26863 4.26863 2 4.6 2H19.4C19.7314 2 20 2.26863 20 2.6V15.5279C20 17.043 19.144 18.428 17.7889 19.1056L12.2683 21.8658C12.0994 21.9503 11.9006 21.9503 11.7317 21.8658Z",
      },
      { r: "pulse", o: [12, 12] },
    ],
    ["path", { d: "M12 10V2" }, { r: "pulse", o: [12, 12] }],
    ["path", { d: "M4 10H20" }, { r: "pulse", o: [12, 12] }],
  ],
});
