# CSS 

## Contents
- [Properties](#css-properties)
  - [Layout](#layout-properties)
  - [Box Model](#box-model-properties)
  - [Typography](#typography-properties)
  - [Visual Effects](#visual-effects-properties)
  - [Transforms & Animations](#transforms--animations-properties)
  - [Grid & Flexbox](#grid--flexbox-properties)
  - [Color & Background](#color--background-properties)
  - [Borders & Outlines](#borders--outlines-properties)
  - [Tables](#tables-properties)
  - [Lists & Counters](#lists--counters-properties)
  - [User Interface](#user-interface-properties)
  - [Filters & Compositing](#filters--compositing-properties)
  - [Masking & Clipping](#masking--clipping-properties)
  - [Scrolling](#scrolling-properties)
  - [Writing Modes](#writing-modes-properties)
- [Selectors](#css-selectors)
- [At-Rules](#css-at-rules)
- [Functions](#css-functions)
- [Data Types](#css-data-types)

## CSS Properties

### Layout Properties
**Total: 9 properties**
- `display`: Element behavior (e.g., block, flex). **Values**: 28 (inline, block, flex, grid, none, etc.).
- `position`: Positioning type. **Values**: 5 (static, relative, absolute, fixed, sticky).
- `top`, `right`, `bottom`, `left`: Position offsets. **Values**: length, percentage, auto.
- `z-index`: Z-order. **Values**: auto, integer.
- `float`: Floats element. **Values**: 5 (left, right, none, inline-start, inline-end).
- `clear`: Clears floats. **Values**: 5 (none, left, right, both, inline-start/end).
- **Example**:
  ```css
  div { position: absolute; top: 10px; display: flex; }
  ```

### Box Model Properties
**Total: 24 properties**
- `width`, `height`: Dimensions. **Values**: length, percentage, auto, min-content, max-content, fit-content.
- `min-width`, `min-height`, `max-width`, `max-height`: Constraints. **Values**: length, percentage, none, min/max-content, fit-content.
- `padding`, `padding-top/right/bottom/left`: Inner spacing. **Values**: length, percentage.
- `margin`, `margin-top/right/bottom/left`: Outer spacing. **Values**: length, percentage, auto.
- `box-sizing`: Size calculation. **Values**: 2 (content-box, border-box).
- `overflow`, `overflow-x/y`: Overflow behavior. **Values**: 8 (visible, hidden, clip, scroll, auto, overlay).
- `overflow-wrap`: Word breaking. **Values**: 3 (normal, break-word, anywhere).
- `visibility`: Visibility. **Values**: 3 (visible, hidden, collapse).
- `aspect-ratio`: Element ratio. **Values**: auto, ratio.
- `contain`: Isolation level. **Values**: 9 (none, strict, content, size, layout, style, paint, inline-size).
- **Example**:
  ```css
  .box { width: 200px; padding: 10px; box-sizing: border-box; }
  ```

### Typography Properties
**Total: 38 properties**
- `color`: Text color. **Values**: 147 named colors, hex, rgb, hsl, etc.
- `font`: Shorthand. **Values**: Combinations.
- `font-family`: Font choice. **Values**: family-name, 5 generics (serif, sans-serif, monospace, cursive, fantasy).
- `font-size`: Text size. **Values**: 7 absolute (xx-small–xx-large), 2 relative (larger, smaller), length, percentage.
- `font-weight`: Boldness. **Values**: 11 (100–900, normal, bold, bolder, lighter).
- `font-style`, `font-variant`, `font-stretch`, `line-height`, `letter-spacing`, `word-spacing`, `text-align` (7: left, right, center, justify, start, end, match-parent), `text-decoration` (line, color, style, thickness), `text-indent`, `text-transform` (6: none, capitalize, uppercase, lowercase, full-width, full-size-kana), `text-overflow`, `text-shadow`, `white-space` (7: normal, nowrap, pre, etc.), `word-break`, `text-align-last`, `text-justify`, `direction`, `unicode-bidi`, `vertical-align`, `text-orientation`, `text-combine-upright`, `writing-mode`, `hanging-punctuation`, `hyphens`, `tab-size`, `quotes`, `text-rendering`, `text-size-adjust`, `font-kerning`.
- **Example**:
  ```css
  p { font-family: Arial, sans-serif; font-size: 16px; color: #333; }
  ```

### Visual Effects Properties
**Total: 14 properties**
- `opacity`: Transparency. **Values**: 0.0–1.0.
- `box-shadow`: Shadow. **Values**: offset-x/y, blur-radius, spread-radius, color.
- `filter`, `backdrop-filter`: Effects. **Values**: 10 functions (blur, brightness, etc.).
- `mix-blend-mode`, `background-blend-mode`: Blending. **Values**: 16 (normal, multiply, etc.).
- `isolation`, `object-fit` (5: fill, contain, cover, none, scale-down), `object-position`, `resize`, `cursor` (39+ custom), `caret-color`, `pointer-events`, `user-select`.
- **Example**:
  ```css
  img { opacity: 0.8; filter: blur(5px); }
  ```

### Transforms & Animations Properties
**Total: 24 properties**
- `transform`: 2D/3D transforms. **Values**: 20+ functions (rotate, scale, translate, etc.).
- `transform-origin`, `transform-style`, `perspective`, `perspective-origin`, `backface-visibility`.
- `animation`, `animation-name`, `animation-duration`, `animation-timing-function` (7: ease, linear, etc.), `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, `animation-play-state`.
- `transition`, `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`, `rotate`, `scale`, `translate`, `offset`.
- **Example**:
  ```css
  div { transform: rotate(45deg); transition: all 0.3s ease; }
  ```

### Grid & Flexbox Properties
**Total: 30 properties**
- **Flexbox (19)**: `flex`, `flex-direction` (4: row, row-reverse, etc.), `flex-wrap`, `flex-flow`, `justify-content` (14), `align-items` (9), `align-content`, `align-self`, `flex-grow`, `flex-shrink`, `flex-basis`, `order`, `gap`, `row-gap`, `column-gap`, `place-content`, `place-items`, `place-self`, `justify-items`.
- **Grid (11)**: `grid`, `grid-template`, `grid-template-rows/columns/areas`, `grid-auto-rows/columns`, `grid-auto-flow` (4: row, column, etc.), `grid-row/column/area`.
- **Example**:
  ```css
  .container { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  ```

### Color & Background Properties
**Total: 18 properties**
- `background`: Shorthand. **Values**: Combinations.
- `background-color`, `background-image` (url(), 4 gradient types), `background-position`, `background-size`, `background-repeat` (6: repeat, no-repeat, etc.), `background-attachment`, `background-origin`, `background-clip`.
- `linear-gradient()`, `radial-gradient()`, `conic-gradient()`, `repeating-linear/radial/conic-gradient()`, `image-rendering`, `image-orientation`, `image-resolution`.
- **Example**:
  ```css
  div { background: linear-gradient(blue, red); }
  ```

### Borders & Outlines Properties
**Total: 26 properties**
- **Borders (20)**: `border`, `border-width/style/color`, `border-top/right/bottom/left`, `border-top/right/bottom/left-width/style/color`.
- **Border Radius (5)**: `border-radius`, `border-top/left/right/bottom-left/right-radius`.
- **Outline (6)**: `outline`, `outline-width/style/color`, `outline-offset`.
- **Example**:
  ```css
  div { border: 1px solid #000; border-radius: 5px; }
  ```

### Tables Properties
**Total: 9 properties**
- `table-layout` (2: auto, fixed), `border-collapse`, `border-spacing`, `caption-side` (4), `empty-cells`, `vertical-align`, `columns`, `column-count`, `column-width`.
- **Example**:
  ```css
  table { table-layout: fixed; border-collapse: collapse; }
  ```

### Lists & Counters Properties
**Total: 11 properties**
- `list-style`, `list-style-type` (30+: disc, decimal, etc.), `list-style-position`, `list-style-image`, `counter-reset/increment/set`, `marker-start/mid/end`, `content`.
- **Example**:
  ```css
  ul { list-style-type: square; }
  ```

### User Interface Properties
**Total: 12 properties**
- `appearance`, `cursor` (39+ custom), `outline`, `resize`, `user-select`, `pointer-events`, `scroll-behavior`, `caret-color`, `accent-color`, `touch-action`, `will-change`, `all`.
- **Example**:
  ```css
  button { cursor: pointer; user-select: none; }
  ```

### Filters & Compositing Properties
**Total: 6 properties**
- `filter`, `backdrop-filter` (10 functions), `mix-blend-mode`, `background-blend-mode` (16 modes), `isolation`, `clip-path`.
- **Example**:
  ```css
  img { filter: grayscale(50%); }
  ```

### Masking & Clipping Properties
**Total: 15 properties**
- `mask`, `mask-image/mode/repeat/position/clip/origin/size/composite/type`, `mask-border`, `clip-path`, `clip-rule`, `shape-outside`.
- **Example**:
  ```css
  div { clip-path: circle(50%); }
  ```

### Scrolling Properties
**Total: 5 properties**
- `scroll-behavior`: Scroll smoothness. **Values**: 2 (auto, smooth).
- `scroll-snap-type`: Snap behavior. **Values**: 7 (none, x/y/block/inline/both mandatory/proximity).
- `scroll-snap-align`: Snap alignment. **Values**: 7 (none, start, end, center, etc.).
- `scroll-snap-stop`: Snap stopping. **Values**: 2 (normal, always).
- `scroll-padding`: Scroll offset. **Values**: length, percentage, auto.
- **Example**:
  ```css
  .container { scroll-behavior: smooth; scroll-snap-type: y mandatory; }
  ```

### Writing Modes Properties
**Total: 4 properties**
- `writing-mode`: Text direction. **Values**: 5 (horizontal-tb, vertical-rl/lr, sideways-rl/lr).
- `text-orientation`: Character orientation. **Values**: 4 (mixed, upright, sideways-right, sideways).
- `direction`: Text direction. **Values**: 2 (ltr, rtl).
- `unicode-bidi`: Bidirectional algorithm. **Values**: 10 (normal, embed, isolate, etc.).
- **Example**:
  ```css
  div { writing-mode: vertical-rl; }
  ```

## CSS Selectors
**Total: ~100+ variations**
- **Basic**: Element, class (`.class`), ID (`#id`), universal (`*`), grouping (`,`).
- **Combinators**: 5 (descendant ` `, child `>`, sibling `+`, general sibling `~`, column `||`).
- **Pseudo-classes**: ~50 (e.g., `:hover`, `:focus`, `:nth-child(n)`).
- **Pseudo-elements**: ~10 (e.g., `::before`, `::after`, `::first-line`).
- **Attribute Selectors**: `[attr]`, `[attr=value]`, etc. (7 operators).
- **Example**:
  ```css
  div:hover > p::first-line { color: blue; }
  ```

## CSS At-Rules
**Total: ~15**
- `@charset`: Encoding (e.g., UTF-8).
- `@import`: Imports stylesheets.
- `@media`: Conditional styles (e.g., `(min-width: 600px)`).
- `@keyframes`: Animation keyframes.
- `@font-face`: Custom fonts.
- `@supports`: Feature queries.
- Others: `@page`, `@counter-style`, `@property`, etc.
- **Example**:
  ```css
  @media (min-width: 600px) { div { font-size: 16px; } }
  ```

## CSS Functions
**Total: ~30**
- `rgb()`, `hsl()`, `url()`, `calc()`, `min()`, `max()`, `clamp()`.
- Gradient: `linear-gradient()`, `radial-gradient()`, `conic-gradient()`.
- Transform: `rotate()`, `scale()`, `translate()`, etc.
- Filter: `blur()`, `brightness()`, etc.
- **Example**:
  ```css
  div { background: linear-gradient(90deg, red, blue); }
  ```

## CSS Data Types
**Total: ~20**
- `<color>`: 147 named, hex, rgb, hsl, etc.
- `<length>`: px, rem, vw, etc. (10 absolute, 10 relative).
- `<percentage>`: %.
- `<angle>`: deg, rad, turn (4).
- `<time>`: s, ms.
- `<resolution>`: dpi, dppx.
- `<image>`: url(), gradient.
- **Example**:
  ```css
  div { width: 50%; transform: rotate(45deg); }
  ```

## Resources
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Contributing](https://github.com/fabiofreitasxavier/study/blob/main/CONTRIBUTING.md)

Contributions welcome to add examples or clarify concepts!