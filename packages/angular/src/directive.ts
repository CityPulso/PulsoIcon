import type { IconData, IconHandle } from "./icon";

import { booleanAttribute, Directive, ElementRef, inject, input } from "@angular/core";

import { drawIcon } from "./icon";

/**
 * Draws and animates an icon inside your own <svg>: `<svg pulsoIcon [icon]="Bell" size="32"></svg>`.
 * Your attributes, classes and styles on the <svg> stay; the icon adds its own. `#bell="pulsoIcon"` gives the handle.
 */
@Directive({
  selector: "svg[pulsoIcon]",
  exportAs: "pulsoIcon",
})
export class PulsoIconDirective implements IconHandle {
  /** The icon to draw (`Bell` from pulsoicon-angular). */
  readonly icon = input.required<IconData>();
  /** Width and height; numbers are pixels. Default 24. */
  readonly size = input<number | string>(24);
  /** Stroke (and, when solid, fill) colour. Default `currentColor`. */
  readonly color = input("currentColor");
  /** Stroke width in the 24-unit grid. Default 2. */
  readonly strokeWidth = input<number | string>(2);
  /** Keep the stroke width constant in pixels whatever the size. */
  readonly absoluteStrokeWidth = input(false, { transform: booleanAttribute });
  /** Filled glyph instead of outline. Default false. */
  readonly solid = input(false, { transform: booleanAttribute });
  /** false: the icon never moves (the handle and `play` do nothing). Default true. */
  readonly animated = input(true, { transform: booleanAttribute });
  /** Play on hover / focus of the closest interactive ancestor. Default true. */
  readonly autoAnimated = input(true, { transform: booleanAttribute });
  /** true plays the motion, false returns to the resting frame. */
  readonly play = input<boolean | undefined>(undefined);
  /** Accessible name: the icon becomes `role="img"` with this label instead of `aria-hidden`. */
  readonly label = input<string | undefined>(undefined);

  private readonly svg: SVGSVGElement = inject(ElementRef).nativeElement;
  private readonly handle = drawIcon(this, () => this.svg);

  /** Plays the icon's motion (does nothing under reduced motion, or when `animated` is false); resolves when it has finished. */
  startAnimation(): Promise<void> {
    return this.handle.startAnimation();
  }

  /** Returns to the resting frame; resolves when it is there. */
  stopAnimation(): Promise<void> {
    return this.handle.stopAnimation();
  }
}
