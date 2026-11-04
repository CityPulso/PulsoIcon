import { createIcon } from "../runtime/createIcon.js";

export const IpAddressTag = createIcon("IpAddressTag", "ip-address-tag", {
  nodes: [
    ["path", { d: "M3 6.5h13l5.3 5.5-5.3 5.5H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z" }, { r: "swing", a: 8, o: [17, 12] }],
    ["path", { d: "M5.5 9.5v5" }, { r: "swing", a: 8, o: [17, 12] }],
    ["path", { d: "M8.5 14.5v-5h2a1.5 1.5 0 0 1 0 3h-2" }, { r: "swing", a: 8, o: [17, 12] }],
    ["path", { d: "M17 12h.01" }, { r: "swing", a: 8, o: [17, 12] }],
  ],
});
