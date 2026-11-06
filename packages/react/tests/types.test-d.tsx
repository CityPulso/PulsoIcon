import type { DistributiveOmit, IconProps } from "pulsoicon-react";

import { Bell } from "pulsoicon-react";

declare const flag: boolean;

export const valid = [
  <Bell key="hover" />,
  <Bell animated={false} key="static" />,
  <Bell autoAnimated={false} key="manual" />,
  <Bell autoAnimated={false} key="manual-play" play={flag} />,
  <Bell key="hover-play" play={flag} />,
  <Bell autoAnimated={flag} key="dynamic-auto" />,
  <Bell key="dynamic-animated" animated={flag} />,
  <Bell key="solid" solid />,
];

export const invalid = [
  // @ts-expect-error a static icon has no trigger
  <Bell animated={false} autoAnimated key="static-auto" />,
  // @ts-expect-error a static icon cannot be played
  <Bell animated={false} key="static-play" play />,
];

// @ts-expect-error DistributiveOmit keeps the animation checks
export const omitted: DistributiveOmit<IconProps, "size"> = { animated: false, play: true };
