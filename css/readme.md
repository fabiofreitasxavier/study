## 🎨 CSS

### Selectors (45+)

#### Basic Selectors (5)
- Universal selector (`*`)
- Type selector (`element`)
- Class selector (`.class`)
- ID selector (`#id`)
- Attribute selector (`[attr]`)

#### Combinators (4)
- Descendant (` `)
- Child (`>`)
- Adjacent sibling (`+`)
- General sibling (`~`)

#### Pseudo-classes (60+)
`:active`, `:checked`, `:disabled`, `:empty`, `:enabled`, `:first-child`, `:first-of-type`, `:focus`, `:focus-visible`, `:focus-within`, `:has()`, `:hover`, `:in-range`, `:invalid`, `:is()`, `:lang()`, `:last-child`, `:last-of-type`, `:link`, `:not()`, `:nth-child()`, `:nth-last-child()`, `:nth-last-of-type()`, `:nth-of-type()`, `:only-child`, `:only-of-type`, `:optional`, `:out-of-range`, `:placeholder-shown`, `:read-only`, `:read-write`, `:required`, `:root`, `:target`, `:valid`, `:visited`, `:where()`, and more

#### Pseudo-elements (14)
`::after`, `::before`, `::first-letter`, `::first-line`, `::marker`, `::placeholder`, `::selection`, `::backdrop`, `::cue`, `::file-selector-button`, `::grammar-error`, `::part()`, `::slotted()`, `::spelling-error`

### Properties by Category (500+)

#### Layout (50+)
**Display & Positioning**
- `display` (30+ values)
- `position` (5 values)
- `top`, `right`, `bottom`, `left`
- `z-index`
- `float`, `clear`
- `overflow`, `overflow-x`, `overflow-y`
- `visibility`
- `clip`, `clip-path`

**Flexbox** (20+)
- `flex`, `flex-direction`, `flex-wrap`, `flex-flow`
- `justify-content`, `align-items`, `align-content`, `align-self`
- `flex-grow`, `flex-shrink`, `flex-basis`
- `gap`, `row-gap`, `column-gap`
- `order`

**Grid** (30+)
- `grid`, `grid-template`, `grid-template-areas`, `grid-template-columns`, `grid-template-rows`
- `grid-auto-columns`, `grid-auto-rows`, `grid-auto-flow`
- `grid-column`, `grid-row`, `grid-area`
- `justify-items`, `justify-content`, `justify-self`
- `align-items`, `align-content`, `align-self`
- `gap`, `row-gap`, `column-gap`

#### Box Model (40+)
- `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`
- `margin` (and logical properties)
- `padding` (and logical properties)
- `border` (and all variants)
- `border-radius`
- `box-sizing`
- `outline`

#### Typography (40+)
- `font`, `font-family`, `font-size`, `font-weight`, `font-style`, `font-variant`
- `line-height`, `letter-spacing`, `word-spacing`
- `text-align`, `text-decoration`, `text-transform`, `text-indent`
- `white-space`, `word-break`, `word-wrap`, `overflow-wrap`
- `color`, `direction`, `writing-mode`

#### Visual Effects (60+)
**Colors & Backgrounds**
- `color`, `opacity`
- `background` (and all variants)
- `background-blend-mode`, `mix-blend-mode`
- `filter`, `backdrop-filter`

**Transforms & Animations**
- `transform`, `transform-origin`, `transform-style`
- `transition` (and all properties)
- `animation` (and all properties)
- `perspective`, `perspective-origin`

**Shadows & Effects**
- `box-shadow`, `text-shadow`
- `filter` functions (blur, brightness, contrast, etc.)

#### Sizing & Units

**Absolute Units** (5)
- `px`, `cm`, `mm`, `in`, `pt`, `pc`

**Relative Units** (12)
- `em`, `rem`, `%`
- `vh`, `vw`, `vmin`, `vmax`
- `ch`, `ex`, `lh`, `rlh`
- `dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`

**Functions** (30+)
- `calc()`, `min()`, `max()`, `clamp()`
- `var()`, `rgb()`, `hsl()`, `hwb()`, `lab()`, `lch()`, `oklab()`, `oklch()`
- `linear-gradient()`, `radial-gradient()`, `conic-gradient()`
- `url()`, `attr()`

### At-Rules (20+)

- `@charset` - Character encoding
- `@import` - Import stylesheet
- `@namespace` - XML namespace
- `@media` - Media queries
- `@supports` - Feature queries
- `@keyframes` - Animation keyframes
- `@font-face` - Custom fonts
- `@page` - Print styles
- `@counter-style` - Custom counters
- `@property` - Custom properties
- `@layer` - Cascade layers
- `@container` - Container queries
- `@scope` - Style scoping
- And more...

### Media Query Features (40+)

**Viewport/Device**
- `width`, `height`, `aspect-ratio`
- `orientation`, `resolution`
- `color`, `color-gamut`, `color-index`
- `monochrome`, `scan`, `grid`

**User Preferences**
- `prefers-color-scheme`
- `prefers-reduced-motion`
- `prefers-contrast`
- `prefers-reduced-transparency`

**Interaction**
- `hover`, `pointer`, `any-hover`, `any-pointer`