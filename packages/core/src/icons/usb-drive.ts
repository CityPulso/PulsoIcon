import { icon } from "../icon.js";

export const UsbDrive = icon("UsbDrive", "usb-drive", {
  nodes: [
    ["rect", { x: "7", y: "9", width: "10", height: "13", rx: "2" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M9 9V3h6v6" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
    ["path", { d: "M11 6h.01M13 6h.01" }, { r: "bounce", y: -1, a: 1.5, o: [12, 12] }],
  ],
});
