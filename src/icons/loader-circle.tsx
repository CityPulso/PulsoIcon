import { createIcon } from "../runtime/createIcon.js";

export const LoaderCircle = createIcon("LoaderCircle", "loader-circle", {
  nodes: [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }, { r: "spin", a: 360, o: [12, 12] }]],
});
