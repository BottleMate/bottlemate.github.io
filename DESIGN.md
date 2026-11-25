# BottleMate website: design system

The direction is taken from BottleMate's own printed manual, pocket guide and box (`manual/src/*.css`). The site should feel like the box and manual: deep navy covers with a blue "light ring" accent, then calm, airy light pages like the app.

## Colour

| Token | Value | Role |
|---|---|---|
| `--navy` | `#0B1F3F` | Headings on light, dark section background |
| `--night` | `#061226` | Deepest background (hero, footer) |
| `--ink` | `#12294F` | Body text on light |
| `--slate` | `#4A5E7A` | Secondary text on light |
| `--mute` | `#7A8BA3` | Captions, mono labels |
| `--blue` | `#2F7CF0` | Primary action, links, kicker labels |
| `--sky` | `#5CC2FF` | Accent on dark, the light-ring line, logo gradient top |
| `--mist` | `#EEF5FD` | Tinted light sections |
| `--paper` | `#FBFDFF` | Page background |
| `--line` | `#DCE5F1` | Borders, rules on light |
| `--gold` | `#E9A23B` | "Goal reached" / warnings only |

Text on dark uses `#FFFFFF` for headings, `#B9C8DE` for body (≥ 7:1 on `--night`).

Logo tile: rounded square, `linear-gradient(180deg, #5CC2FF, #2F7CF0)`, white outlined water drop. Wordmark: "Bottle" in the heading colour, "Mate" in `--blue` (light) or `--sky` (dark).

## Type

- **Manrope** 500 / 700 / 800 (variable woff2, latin). Headings 800, tight tracking (−0.03em on display sizes).
- **JetBrains Mono** 600 for kicker labels (uppercase, +0.15em tracking), version pills, specs values.
- Scale (fluid): display `clamp(2.6rem, 6vw, 4.6rem)`, h2 `clamp(1.9rem, 3.6vw, 2.8rem)`, h3 `1.2rem`, body `1.05rem/1.6`, small `.9rem`.

## Space, radius, depth

- 4 px base; section padding `clamp(72px, 10vw, 128px)` vertical; content max width 1180 px.
- Radius: 10 px buttons/inputs, 18 px cards, 44 px phone frame, 999 px pills.
- Shadows: cards `0 1px 2px rgba(11,31,63,.04), 0 8px 24px rgba(11,31,63,.06)`; primary button glow `0 8px 24px rgba(47,124,240,.35)`.

## Components

- **Buttons:** primary (blue fill, white text), secondary (outline; white on dark, navy on light). Min height 48 px.
- **Kicker:** mono, uppercase, blue (sky on dark), above every section heading.
- **Phone frame:** real Pixel 7 Pro screenshots (status bar cropped), 44 px radius, dark bezel.
- **OLED tiles:** the base's real 128×64 screen renders on black, 14 px radius.
- **Light-ring line:** a thin sky→blue gradient bar used as a section divider, echoing the base's LED ring.

## Motion

Short fade-up reveals (300 ms) on scroll, off under `prefers-reduced-motion`.

## Theme

One fixed look (dark hero, dark product sections, light content sections), like the printed material. No light/dark toggle.
