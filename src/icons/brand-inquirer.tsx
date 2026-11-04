import { createIcon } from "../runtime/createIcon.js";

// Drawn after Simple Icons "inquirer" (CC0-1.0). Inquirer is a trademark of its owner.
export const BrandInquirer = createIcon("BrandInquirer", "brand-inquirer", {
  nodes: [
    ["path", { d: "M7 4.5H3.5v15H7" }, { r: "slide", x: 1, a: 1.5 }],
    ["path", { d: "M17 4.5h3.5v15H17" }, { r: "slide", x: -1, a: 1.5 }],
    ["path", { d: "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6" }, { r: "swing", d: 0.1, a: 15, o: [12, 6] }],
    ["path", { d: "M12 17.5h.01" }, { r: "pop", d: 0.2, o: [12, 17.5] }],
  ],
});
