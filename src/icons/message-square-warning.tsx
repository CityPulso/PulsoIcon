import { createIcon } from "../runtime/createIcon.js";

export const MessageSquareWarning = createIcon("MessageSquareWarning", "message-square-warning", {
  nodes: [
    ["path", { d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }, { r: "shake", a: 1, o: [12, 12.498] }],
    ["path", { d: "M12 15h.01" }, { r: "pop", d: 0.25, o: [12.005, 15] }],
    ["path", { d: "M12 7v4" }, { r: "grow", d: 0.1, o: [12, 7] }],
  ],
});
