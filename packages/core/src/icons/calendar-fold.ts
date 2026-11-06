import { icon } from "../icon.js";

export const CalendarFold = icon("CalendarFold", "calendar-fold", {
  nodes: [
    ["path", { d: "M16 2v3" }, { r: "lift", d: 0.1, o: [12, 3.5] }],
    ["path", { d: "M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10v-5a1 1 0 011-1za2.4 2.4 0 01-.706 1.706l-3.588 3.588A2.4 2.4 0 0115 21" }, { r: "fold", o: [12, 9] }],
    ["path", { d: "M3 9h18" }, { r: "fold", o: [12, 9] }],
    ["path", { d: "M8 2v3" }, { r: "lift", d: 0.16, o: [12, 3.5] }],
  ],
});
