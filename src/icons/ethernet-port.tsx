import { createIcon } from "../runtime/createIcon.js";

export const EthernetPort = createIcon("EthernetPort", "ethernet-port", {
  nodes: [
    ["path", { d: "M10 8v1" }, { r: "flicker", d: 0.16, o: [12, 8.5] }],
    ["path", { d: "M14 8v1" }, { r: "flicker", d: 0.22, o: [12, 8.5] }],
    ["path", { d: "M18 8v1" }, { r: "flicker", d: 0.28, o: [12, 8.5] }],
    [
      "path",
      { d: "M19 17a2 2 0 00-1.765 1.059l-.47.882A2 2 0 0115 20H9a2 2 0 01-1.765-1.059l-.47-.882A2 2 0 005 17H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2z" },
      { r: "press", a: 0.04, o: [12, 12] },
    ],
    ["path", { d: "M6 8v1" }, { r: "flicker", d: 0.1, o: [12, 8.5] }],
  ],
});
