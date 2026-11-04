import { createIcon } from "../runtime/createIcon.js";

export const Rake = createIcon("Rake", "rake", {
  nodes: [
    ["path", { d: "M12 2v11" }, { r: "slide", y: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M4 13h16" }, { r: "slide", y: 1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M4 13v6M8 13v6M12 13v6M16 13v6M20 13v6" }, { r: "slide", y: 1, a: 1.5, o: [12, 12] }],
  ],
});
