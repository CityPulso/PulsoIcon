import { icon } from "../icon.js";

// Drawn after Phosphor Icons "book-open-user" (MIT, Copyright (c) 2023 Phosphor Icons).

export const BookOpenUser = icon("BookOpenUser", "book-open-user", {
  nodes: [
    ["circle", { cx: "12", cy: "5", r: "2" }, { r: "float", d: 0.1, o: [12, 5] }],
    ["path", { d: "M12 13v9" }, { r: "press", a: 0.04, o: [12, 22] }],
    [
      "path",
      { d: "M3 19a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" },
      { r: "press", a: 0.04, o: [12, 22] },
    ],
  ],
});
