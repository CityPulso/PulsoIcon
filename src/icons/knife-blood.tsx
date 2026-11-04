import { createIcon } from "../runtime/createIcon.js";

export const KnifeBlood = createIcon("KnifeBlood", "knife-blood", {
  nodes: [
    ["path", { d: "M12.5 9.5 3 20c5.5.5 10.5-1.5 13.5-6.5z" }, { r: "slide", x: -1, y: 1, a: 1, o: [9, 15] }],
    ["path", { d: "M15.5 12.5l5-5a1.414 1.414 0 0 0-2-2l-5 5" }, { r: "slide", x: -1, y: 1, a: 1, o: [17, 9] }],
    ["path", { d: "M19 15.5l-1.6 2.6a2 2 0 1 0 3.2 0z" }, { r: "drop", d: 0.2, o: [19, 18.5] }],
  ],
});
