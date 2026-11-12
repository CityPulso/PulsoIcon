import type { ListItem } from "../shared/catalog";

import { NgTemplateOutlet } from "@angular/common";
import { afterRenderEffect, Component, computed, effect, ElementRef, inject, signal } from "@angular/core";
import { BrandCitypulso, PulsoIconComponent } from "pulsoicon-angular";
import { ICONS } from "pulsoicon-angular/all";

import {
  ALL,
  BATCH,
  CATEGORY_COUNTS,
  CATEGORY_NAMES,
  categoryLabel,
  CHANGELOG_BLOCKS,
  filterIcons,
  FIRST_VERSION,
  FrameworkEnum,
  FRAMEWORKS,
  frameworkUrl,
  hint,
  ICON_NAMES,
  initialTheme,
  inline,
  letterCounts,
  LETTERS,
  neighbours,
  playVisible,
  reducedMotion,
  REVIEW_COUNTS,
  REVIEW_STATES,
  reviewOf,
  SEARCH_DEBOUNCE_MS,
  ThemeEnum,
  VERSION_NAMES,
  versionOf,
  versionOptionLabel,
  visibleIcons,
} from "../shared/catalog";

@Component({
  selector: "app-root",
  imports: [PulsoIconComponent, NgTemplateOutlet],
  template: `
    <ng-template #inlines let-parts>
      @for (part of parts; track $index) {
        @switch (part.kind) {
          @case ("code") {
            <code>{{ part.text }}</code>
          }
          @case ("strong") {
            <strong><ng-container *ngTemplateOutlet="inlines; context: { $implicit: part.children }" /></strong>
          }
          @case ("link") {
            <a [href]="part.href" rel="noreferrer" target="_blank">{{ part.text }}</a>
          }
          @default {
            {{ part.text }}
          }
        }
      }
    </ng-template>
    <ng-template #list let-items>
      <ul>
        @for (item of asItems(items); track $index) {
          <li>
            <ng-container *ngTemplateOutlet="inlines; context: { $implicit: inline(item.text) }" />
            @if (item.children.length) {
              <ng-container *ngTemplateOutlet="list; context: { $implicit: item.children }" />
            }
          </li>
        }
      </ul>
    </ng-template>

    <div class="page" [attr.data-theme]="theme()">
      <header class="bar">
        <div class="title">
          <h1 class="brand" data-icon-trigger title="PulsoIcon by CityPulso">
            PulsoIcon
            <pulso-icon class="company" [icon]="brand" [size]="26" />
            <!-- The CityPulso bars use the logo's orange gradient (see .company in app.css). -->
            <svg aria-hidden="true" height="0" style="position: absolute" width="0">
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="citypulso-orange" x1="0" x2="0" y1="14" y2="3">
                  <stop offset="0" stop-color="#e8412c" />
                  <stop offset="1" stop-color="#f7941d" />
                </linearGradient>
              </defs>
            </svg>
          </h1>
          <nav aria-label="Framework" class="frameworks">
            @for (f of frameworks; track f.id) {
              <a [attr.aria-current]="f.id === current ? 'page' : null" [href]="frameworkUrl(f.port)">{{ f.label }}</a>
            }
          </nav>
          <p>{{ iconCount }} animated icons. Hover a card to play it.</p>
          @if (reducedMotion) {
            <p class="warn">Your system asks for reduced motion, so icons will not animate. Turn it off to review.</p>
          }
        </div>
        <div class="controls">
          <select aria-label="Category" class="select" [value]="category()" (change)="category.set(value($event))">
            <option [value]="ALL">All categories ({{ iconCount }})</option>
            @for (c of categoryNames; track c) {
              <option [value]="c">{{ categoryLabel(c) }} ({{ categoryCounts.get(c) }})</option>
            }
          </select>
          <select aria-label="Version" class="select" [value]="version()" (change)="version.set(value($event))">
            <option [value]="ALL">All versions ({{ iconCount }})</option>
            @for (v of versionNames; track v) {
              <option [value]="v">{{ versionOptionLabel(v) }}</option>
            }
          </select>
          <select aria-label="Solid review" class="select" [value]="review()" (change)="review.set(value($event))">
            <option [value]="ALL">All solid states</option>
            @for (s of reviewStates; track s) {
              <option [value]="s">{{ s }} ({{ reviewCounts.get(s) ?? 0 }})</option>
            }
          </select>
          <input aria-label="Search icons" class="search" placeholder="Search, e.g. calendar" type="search" [value]="input()" (input)="input.set(value($event))" />
          <label class="range">
            Size {{ size() }}
            <input max="96" min="16" type="range" [value]="size()" (input)="size.set(+value($event))" />
          </label>
          <label class="range">
            Stroke {{ stroke() }}
            <input max="3" min="1" step="0.25" type="range" [value]="stroke()" (input)="stroke.set(+value($event))" />
          </label>
          <button class="button" type="button" [attr.aria-expanded]="showLog()" (click)="showLog.set(!showLog())">Changelog</button>
          <button class="button" type="button" (click)="playVisible()">Play visible</button>
          <button class="button" type="button" (click)="toggleTheme()">{{ theme() === DARK ? "Light" : "Dark" }}</button>
        </div>
        <nav aria-label="Pages by first letter" class="letters">
          <button class="letter" type="button" [attr.aria-pressed]="letter() === ALL" [disabled]="searching()" (click)="goTo(ALL)">All</button>
          @for (l of letters; track l) {
            <button
              class="letter"
              type="button"
              [attr.aria-pressed]="letter() === l"
              [disabled]="searching() || !counts().get(l)"
              [title]="(counts().get(l) ?? 0) + ' icons'"
              (click)="goTo(l)"
            >
              {{ l }}
            </button>
          }
        </nav>
        <p class="hint">{{ hint(names().length, filters(), query(), letter()) }}</p>
      </header>
      @if (showLog()) {
        <section class="changelog">
          @for (block of changelog; track $index) {
            @switch (block.kind) {
              @case ("h2") {
                <h2>
                  {{ block.text }}
                  @if (block.show; as show) {
                    <button class="button small" type="button" (click)="showVersion(show.group)">{{ show.label }}</button>
                  }
                </h2>
              }
              @case ("h3") {
                <h3>{{ block.text }}</h3>
              }
              @case ("p") {
                <p><ng-container *ngTemplateOutlet="inlines; context: { $implicit: inline(block.text) }" /></p>
              }
              @default {
                <ng-container *ngTemplateOutlet="list; context: { $implicit: block.items }" />
              }
            }
          }
        </section>
      }
      <main class="grid">
        @for (name of shown(); track name) {
          <div class="card" data-icon-trigger>
            <div class="pair">
              <div class="cell" title="Outline"><pulso-icon [icon]="icons[name]" [size]="size()" [strokeWidth]="stroke()" /></div>
              <div class="cell" title="Solid"><pulso-icon [icon]="icons[name]" [size]="size()" [strokeWidth]="stroke()" solid /></div>
            </div>
            <div class="name">
              {{ name }}
              <span [class]="'tag review-' + reviewOf(name)">{{ reviewOf(name) }}</span>
              @if (versionOf(name) !== firstVersion) {
                <span class="tag">{{ versionOf(name) }}</span>
              }
            </div>
          </div>
        }
        @if (count() < names().length) {
          <div aria-hidden="true" class="more"></div>
        }
      </main>
      @if (!searching() && letter() !== ALL) {
        <footer class="pager">
          @if (pages().previous; as previous) {
            <button class="button" type="button" (click)="goTo(previous)">← {{ previous }}</button>
          }
          @if (pages().next; as next) {
            <button class="button" type="button" (click)="goTo(next)">{{ next }} →</button>
          }
        </footer>
      }
    </div>
  `,
})
export class App {
  readonly ALL = ALL;
  readonly DARK = ThemeEnum.DARK;
  readonly current = FrameworkEnum.ANGULAR;
  readonly frameworks = FRAMEWORKS;
  readonly brand = BrandCitypulso;
  readonly icons = ICONS;
  readonly iconCount = ICON_NAMES.length;
  readonly categoryNames = CATEGORY_NAMES;
  readonly categoryCounts = CATEGORY_COUNTS;
  readonly versionNames = VERSION_NAMES;
  readonly reviewStates = REVIEW_STATES;
  readonly reviewCounts = REVIEW_COUNTS;
  readonly letters = LETTERS;
  readonly changelog = CHANGELOG_BLOCKS;
  readonly firstVersion = FIRST_VERSION;
  readonly reducedMotion = reducedMotion;
  readonly frameworkUrl = frameworkUrl;
  readonly categoryLabel = categoryLabel;
  readonly versionOptionLabel = versionOptionLabel;
  readonly reviewOf = reviewOf;
  readonly versionOf = versionOf;
  readonly hint = hint;
  readonly inline = inline;
  readonly playVisible = playVisible;

  readonly input = signal("");
  readonly query = signal("");
  readonly review = signal(ALL);
  readonly size = signal(32);
  readonly stroke = signal(2);
  readonly theme = signal(initialTheme());
  readonly letter = signal("A");
  readonly category = signal(ALL);
  readonly version = signal(ALL);
  readonly showLog = signal(false);
  readonly count = signal(BATCH);

  readonly filters = computed(() => ({ category: this.category(), version: this.version(), review: this.review() }));
  readonly inCategory = computed(() => filterIcons(this.filters()));
  readonly names = computed(() => visibleIcons(this.inCategory(), this.query(), this.letter()));
  readonly counts = computed(() => letterCounts(this.inCategory()));
  readonly searching = computed(() => !!this.query().trim());
  readonly pages = computed(() => neighbours(this.counts(), this.letter()));
  /** The cards mounted so far: more are added as the end of the grid comes near the screen. */
  readonly shown = computed(() => this.names().slice(0, this.count()));

  private readonly host: HTMLElement = inject(ElementRef).nativeElement;

  constructor() {
    effect((onCleanup) => {
      const value = this.input();
      const timer = window.setTimeout(() => this.query.set(value), SEARCH_DEBOUNCE_MS);
      onCleanup(() => window.clearTimeout(timer));
    });
    effect(() => {
      this.names();
      this.count.set(BATCH);
    });
    afterRenderEffect((onCleanup) => {
      const end = this.host.querySelector(".more");
      if (!end || this.count() >= this.names().length) return;
      const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && this.count.update((c) => c + BATCH), { rootMargin: "800px" });
      observer.observe(end);
      onCleanup(() => observer.disconnect());
    });
  }

  value(event: Event): string {
    return (event.target as HTMLInputElement | HTMLSelectElement).value;
  }

  asItems(items: ListItem[]): ListItem[] {
    return items;
  }

  goTo(to: string): void {
    this.letter.set(to);
    window.scrollTo({ top: 0 });
  }

  showVersion(v: string): void {
    this.version.set(v);
    this.letter.set(ALL);
    this.showLog.set(false);
    window.scrollTo({ top: 0 });
  }

  toggleTheme(): void {
    this.theme.set(this.theme() === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK);
  }
}