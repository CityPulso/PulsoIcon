import { createIcon } from "../runtime/createIcon.js";

export const Lamp = createIcon("Lamp", "lamp", {
  nodes: [
    ["path", { d: "M12 12v6" }, { r: "press", a: 0.04, o: [12, 22] }],
    ["path", { d: "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" }, { r: "swing", a: 10, o: [12, 12] }],
    ["path", { d: "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" }, { r: "press", a: 0.04, o: [12, 22] }],
  ],
});
