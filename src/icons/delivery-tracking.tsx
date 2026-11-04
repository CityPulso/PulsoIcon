import { createIcon } from "../runtime/createIcon.js";

export const DeliveryTracking = createIcon("DeliveryTracking", "delivery-tracking", {
  nodes: [
    ["path", { d: "M12 22V12" }, { r: "fade", o: [12, 17] }],
    ["path", { d: "M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.5-.286" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M3.29 7 12 12l8.71-5" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "m7.5 4.27 8.997 5.148" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M22 17.5c0 2.2-2.4 4.1-2.6 4.3a.6.6 0 0 1-.8 0c-.2-.2-2.6-2.1-2.6-4.3a3 3 0 0 1 6 0" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [19, 18] }],
    ["path", { d: "M19 17.5h.01" }, { r: "bounce", d: 0.1, y: -1, a: 1.5, o: [19, 18] }],
  ],
});
