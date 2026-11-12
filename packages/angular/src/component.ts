import type { ElementRef } from "@angular/core";
import type { IconData, IconHandle } from "./icon";

import { booleanAttribute, ChangeDetectionStrategy, Component, input, viewChild, ViewEncapsulation } from "@angular/core";

import { drawIcon } from "./icon";

/**
 * One animated icon: `<pulso-icon [icon]="Bell" size="32" />`. It renders the same <svg> as the React package and plays
 * the same motion. The host element takes no room (`display: contents`); `#bell="pulsoIcon"` gives the handle.
 */
@Component({
  selector: "pulso-icon",
  exportAs: "pulsoIcon",
  template: "<svg #svg></svg>",
  // The <svg>'s content is drawn with Renderer2, not from the template, so the client redraws it instead of hydrating it.
  host: { style: "display: contents", ngSkipHydration: "true" },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PulsoIconComponent implements IconHandle {
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

  private readonly svg = viewChild<ElementRef<SVGSVGElement>>("svg");
  private readonly handle = drawIcon(this, () => this.svg()?.nativeElement);

  /** Plays the icon's motion (does nothing under reduced motion, or when `animated` is false); resolves when it has finished. */
  startAnimation(): Promise<void> {
    return this.handle.startAnimation();
  }

  /** Returns to the resting frame; resolves when it is there. */
  stopAnimation(): Promise<void> {
    return this.handle.stopAnimation();
  }
}
