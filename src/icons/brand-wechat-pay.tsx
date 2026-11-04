import { createIcon } from "../runtime/createIcon.js";

export const BrandWechatPay = createIcon("BrandWechatPay", "brand-wechat-pay", {
  nodes: [
    ["circle", { cx: "12", cy: "12", r: "10" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "M7 11.5l3.5 3.5c2-3 4.5-5.5 8-7.5" }, { r: "draw", d: 0.1, o: [12, 12] }],
  ],
});
