import { createIcon } from "../runtime/createIcon.js";

export const TrafficCone = createIcon("TrafficCone", "traffic-cone", {
  nodes: [
    ["path", { d: "M16.05 10.966a5 2.5 0 0 1-8.1 0" }, { r: "wobble", a: 6, o: [12, 17] }],
    ["path", { d: "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04" }, { r: "press", a: 0.04, o: [12, 18.02] }],
    ["path", { d: "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" }, { r: "wobble", a: 6, o: [12, 17] }],
    ["path", { d: "M9.194 6.57a5 2.5 0 0 0 5.61 0" }, { r: "wobble", a: 6, o: [12, 17] }],
  ],
});
