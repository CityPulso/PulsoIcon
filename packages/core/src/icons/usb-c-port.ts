import { icon } from "../icon.js";

export const UsbCPort = icon("UsbCPort", "usb-c-port", {
  nodes: [
    ["path", { d: "M6 12h12" }, { r: "growX", d: 0.05, o: [12, 12] }],
    ["rect", { x: "2", y: "8", width: "20", height: "8", rx: "4" }, { r: "press", a: 0.05, o: [12, 12] }],
  ],
});
