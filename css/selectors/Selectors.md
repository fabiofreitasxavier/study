Selectors

### Coverage:

    Coverage checklist (print this)
    
    Simple: *, type, .class, #id, namespaces
    
    Attributes: presence, equality, ^=, $=, *=, ~=, |=, flags i/s
    
    Combinators: space, >, +, ~, ||
    
    Pseudo-classes: link/location, interaction, forms/UI, structural, language/dir, :scope, :defined
    
    Modern list/relational: :is(), :where(), :not(), :has() (incl. relative selectors)
    
    Pseudo-elements: core UI, forms, markers, shadow-DOM (::part, ::slotted)
    
    Shadow DOM specials: :host, :host-context
    
    Specificity math (incl. how :is/:not/:has/:where score)

0) Selector list & grouping

Grouping: h1, h2, h3 { … }

Relative selectors (with nesting or :has()/:is()): .card :is(h2, h3) targets h2/h3 inside .card.

1) Simple selectors

Universal: * { … } (use sparingly)

Type (tag): article { … }

Class: .btn { … }

ID: #hero { … } (avoid for reusable CSS)

Namespace (rare): svg|path, *|a, |a (no namespace)

2) Attribute selectors

/* presence / equality */
[audio]            /* has attr       */
[type="email"]     /* exact match    */

/* substring */
[src^="/img/"]     /* starts-with    */
[href$=".pdf"]     /* ends-with      */
[title*="pro"]     /* contains       */
[rel~="noopener"]  /* contains word  */
[lang|="en"]       /* en or en-*     */

/* case sensitivity flags */
[type="button" i]  /* case-insensitive */


Gotcha: [data-x] matches even when value is "" (empty string).

3) Combinators (relationships)

Descendant (space): .card p

Child >: .menu > li

Adjacent sibling +: h2 + p

General sibling ~: h2 ~ p

Column || (tables/multi-col): col.warning || td (rare but real)

4) Pseudo-classes (stateful conditions)
a) Links & location

:link, :visited, :any-link, :target, :target-within

b) User interaction

:hover, :active, :focus, :focus-visible, :focus-within

c) Forms/UI state

:enabled, :disabled, :read-only, :read-write,
:placeholder-shown, :checked, :indeterminate, :default,
:valid, :invalid, :in-range, :out-of-range, :required, :optional, :user-invalid

d) Tree/structure

:root, :empty, :first-child, :last-child, :only-child,
:first-of-type, :last-of-type, :only-of-type,
:nth-child(an+b), :nth-last-child(an+b),
:nth-of-type(an+b), :nth-last-of-type(an+b)
→ Level 4 “of” syntax: :nth-child(2 of .item) filters to .item first, then picks the 2nd.

e) Language & direction

:lang(fr), :dir(rtl)

f) Powerful list/relational

:not(<complex-selector>)

:is(<selector-list>)

:where(<selector-list>)

:has(<relative-selector>) (parent/ancestor/relative matching)

4) Pseudo-classes (stateful conditions)
a) Links & location

:link, :visited, :any-link, :target, :target-within

b) User interaction

:hover, :active, :focus, :focus-visible, :focus-within

c) Forms/UI state

:enabled, :disabled, :read-only, :read-write,
:placeholder-shown, :checked, :indeterminate, :default,
:valid, :invalid, :in-range, :out-of-range, :required, :optional, :user-invalid

d) Tree/structure

:root, :empty, :first-child, :last-child, :only-child,
:first-of-type, :last-of-type, :only-of-type,
:nth-child(an+b), :nth-last-child(an+b),
:nth-of-type(an+b), :nth-last-of-type(an+b)
→ Level 4 “of” syntax: :nth-child(2 of .item) filters to .item first, then picks the 2nd.

e) Language & direction

:lang(fr), :dir(rtl)

f) Powerful list/relational

:not(<complex-selector>)

:is(<selector-list>)

:where(<selector-list>)

:has(<relative-selector>) (parent/ancestor/relative matching)
/* Examples */
a:any-link:not([href^="#"]) { text-decoration: underline; }
.card:has(img[loading="lazy"]) { scroll-margin-top: 6rem; }
.nav :is(a, button):focus-visible { outline: 2px solid; }
/* :where contributes ZERO specificity (great for base styles) */
:where(h1, h2, h3) { margin: 0 0 .5em; }


g) Misc

:scope (current reference element; crucial in components), :defined (custom elements ready)

5) Pseudo-elements (generate/select parts of an element)

::before, ::after, ::first-line, ::first-letter,
::selection, ::marker, ::placeholder, ::file-selector-button,
::backdrop (modals/fullscreen), ::cue (captions), Shadow DOM: ::slotted(*), ::part(name)

button::file-selector-button { padding: .5rem 1rem; }
details summary::marker { content: "▶ "; }

button::file-selector-button { padding: .5rem 1rem; }
details summary::marker { content: "▶ "; }

button::file-selector-button { padding: .5rem 1rem; }
details summary::marker { content: "▶ "; }

6) Shadow DOM & web components (when you need them)

Host element: :host, :host(.dark) (inside shadow)

Context outside-in: :host-context([dir="rtl"])

Slots: ::slotted(img[slot="thumb"])

Parts: expose with part="chip" then style externally with ::part(chip)

Specificity — the rules that make or break you

Base weights (rough mental model):
Inline styles (1000) > ID (100) > Class/attr/pseudo-class (10) > Type/pseudo-element (1)

:is() / :not() / :has() take the specificity of their most specific argument.
Example: .card:has(#promo) → counts an ID (100).

:where() always 0 specificity, regardless of its arguments.

A selector list takes the highest specificity among its items.

Source order wins on ties.

Pitfalls you’ll see in interviews & codebases

:empty matches only when no children AND no text nodes (even whitespace breaks it).

:nth-child() vs :nth-of-type() — the former counts all siblings; the latter counts just that tag.

Attribute selectors are string checks, not type checks. [data-count="2"] ≠ [data-count=2] (they’re identical in CSS; both strings).

You cannot pierce someone else’s Shadow DOM from the outside (no legacy /deep/).

:visited is privacy-restricted (very few properties actually apply).

Escaping names: .icon\.svg selects class icon.svg. Use backslashes for special chars.

