import { createIcon } from "../runtime/createIcon.js";

// Adapted from Iconoir "server-connection" (MIT, Copyright (c) 2021 Luca Burgio).
export const ServerConnection = createIcon("ServerConnection", "server-connection", {
  nodes: [
    ["path", { d: "M3 19H12M21 19H12M12 19V13M12 13H18V5H6V13H12Z" }],
    ["path", { d: "M9 9.01L9.01 8.99889" }, { r: "flicker", o: [9, 9] }],
    ["path", { d: "M12 9.01L12.01 8.99889" }, { r: "flicker", d: 0.15, o: [12, 9] }],
  ],
});
