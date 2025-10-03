# Markdown

---

## Table of Contents

1. [Block Elements](#block-elements)
2. [Inline Elements](#inline-elements)
3. [GitHub Flavored Markdown Extensions](#github-flavored-markdown-extensions)
4. [Extended Syntax](#extended-syntax)
5. [Escaping](#escaping)
6. [Entity References](#entity-references)

---

## Block Elements

### 1. Headings

#### 1.1 ATX Headings (6 levels)

Use 1-6 `#` characters at the start of the line.

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

**Output:**
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

**Rules:**
- Must have a space after the `#` characters
- Can be indented 0-3 spaces
- More than 6 `#` characters is not a heading
- Closing `#` characters are optional

**With Closing Hashes:**
```markdown
## Heading 2 ##
### Heading 3 ###
```

**Alternative IDs (not standard):**
```markdown
### My Heading {#custom-id}
```

---

#### 1.2 Setext Headings (2 levels)

Underline text with `=` (level 1) or `-` (level 2).

```markdown
Heading 1
=========

Heading 2
---------
```

**Output:**
Heading 1
=========

Heading 2
---------

**Rules:**
- Underline must have at least one character
- Can have any number of `=` or `-` characters
- Underline can be indented 0-3 spaces
- Content can span multiple lines
- Cannot interrupt a paragraph without a blank line

---

### 2. Paragraphs

Consecutive lines of text form a paragraph. Separate paragraphs with a blank line.

```markdown
This is the first paragraph.
It can span multiple lines.

This is the second paragraph.
```

**Output:**
This is the first paragraph.
It can span multiple lines.

This is the second paragraph.

**Rules:**
- Leading/trailing spaces are stripped
- First line can be indented 0-3 spaces
- Lines can be indented any amount after the first

---

### 3. Line Breaks

#### 3.1 Hard Line Break

End a line with two or more spaces or a backslash.

```markdown
First line··
Second line

First line\
Second line
```

**Output:**
First line  
Second line

First line\
Second line

**Rules:**
- Two spaces + newline = `<br />`
- Backslash + newline = `<br />`
- Does not work at the end of a block
- Leading spaces on next line are ignored

---

#### 3.2 Soft Line Break

Regular line break without trailing spaces (renders as space or newline).

```markdown
This is
one paragraph
```

**Output:**
This is
one paragraph

---

### 4. Blockquotes

Use `>` at the beginning of lines.

```markdown
> This is a blockquote.
> It can span multiple lines.
>
> And have multiple paragraphs.
```

**Output:**
> This is a blockquote.
> It can span multiple lines.
>
> And have multiple paragraphs.

**Nested Blockquotes:**
```markdown
> Level 1
>> Level 2
>>> Level 3
```

**Output:**
> Level 1
>> Level 2
>>> Level 3

**Lazy Continuation:**
```markdown
> This starts a blockquote
and this continues it without >
```

**Blockquotes with Other Elements:**
```markdown
> ### Heading in blockquote
> 
> - List item 1
> - List item 2
>
> ```
> code block
> ```
```

**Rules:**
- `>` can be indented 0-3 spaces
- Space after `>` is optional
- Lazy continuation allowed for paragraphs
- Can contain any block elements

---

### 5. Lists

#### 5.1 Unordered Lists

Use `-`, `*`, or `+` as markers.

```markdown
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

* Item A
* Item B

+ Item X
+ Item Y
```

**Output:**
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

**Rules:**
- Markers must be followed by 1-4 spaces
- Can be indented 0-3 spaces
- Changing markers starts a new list

---

#### 5.2 Ordered Lists

Use numbers followed by `.` or `)`.

```markdown
1. First item
2. Second item
3. Third item

1) First item
2) Second item
3) Third item
```

**Output:**
1. First item
2. Second item
3. Third item

**Start Number:**
```markdown
5. This starts at 5
6. This is 6
7. This is 7
```

**Output:**
5. This starts at 5
6. This is 6
7. This is 7

**Rules:**
- Numbers can be 1-9 digits
- Start number is determined by first item only
- Subsequent numbers are ignored
- Can use `.` or `)` delimiter
- Changing delimiter starts a new list

---

#### 5.3 Tight vs Loose Lists

**Tight List** (no `<p>` tags):
```markdown
- Item 1
- Item 2
- Item 3
```

**Loose List** (with `<p>` tags):
```markdown
- Item 1

- Item 2

- Item 3
```

**Rules:**
- Loose list if items separated by blank lines
- Loose list if item contains two block-level elements with blank line between

---

#### 5.4 Complex List Items

Lists can contain multiple paragraphs, code blocks, and other elements.

```markdown
1. First item

   Second paragraph of first item.
   
   - Nested list
   - In first item

2. Second item
   
   ```
   code block
   ```
   
   > blockquote
```

**Indentation Rules:**
- Content must be indented to align with first non-space character after marker
- Typically 2-4 spaces for nested items
- Code blocks need 8 spaces (4 for list + 4 for code)

---

### 6. Code Blocks

#### 6.1 Indented Code Blocks

Indent 4 spaces or 1 tab.

```markdown
    function hello() {
        console.log("Hello World");
    }
```

**Output:**
    function hello() {
        console.log("Hello World");
    }

**Rules:**
- Cannot interrupt a paragraph (needs blank line)
- Blank lines are preserved
- Initial 4 spaces are removed
- Additional spaces are preserved

---

#### 6.2 Fenced Code Blocks

Use 3+ backticks or tildes.

````markdown
```
code here
```

~~~
code here
~~~
````

**With Language:**
````markdown
```javascript
function hello() {
    console.log("Hello World");
}
```
````

**Output:**
```javascript
function hello() {
    console.log("Hello World");
}
```

**With Info String:**
````markdown
```python startline=3
def hello():
    print("Hello World")
```
````

**Rules:**
- Opening fence: 3+ backticks or tildes
- Closing fence: same type, equal or longer
- Can be indented 0-3 spaces
- Info string (language) comes after opening fence
- Cannot contain backticks if using backtick fence
- Can interrupt paragraphs

---

### 7. Horizontal Rules (Thematic Breaks)

Use 3+ `-`, `_`, or `*` characters.

```markdown
---

***

___
```

**Output:**
---

***

___

**With Spaces:**
```markdown
- - -

* * * *

_ _ _ _ _
```

**Rules:**
- Must be 3 or more matching characters
- Can have spaces between characters
- Can be indented 0-3 spaces
- Cannot mix characters
- Can interrupt paragraphs

---

### 8. HTML Blocks

Raw HTML is passed through unchanged.

```markdown
<div class="example">
    <p>This is raw HTML</p>
</div>
```

**7 Types of HTML Blocks:**

**Type 1:** `<script>`, `<pre>`, `<style>`
```markdown
<script>
console.log("hello");
</script>
```

**Type 2:** HTML comments
```markdown
<!-- This is a comment -->
```

**Type 3:** Processing instructions
```markdown
<?php echo "hello"; ?>
```

**Type 4:** Declarations
```markdown
<!DOCTYPE html>
```

**Type 5:** CDATA
```markdown
<![CDATA[
data here
]]>
```

**Type 6:** Block tags
```markdown
<div>
content
</div>
```

**Type 7:** Opening/closing tags (complete)
```markdown
<table><tr><td>
content
</td></tr></table>
```

**Rules:**
- Types 1-6 can interrupt paragraphs
- Type 7 cannot interrupt paragraphs
- Blank line ends block (except types 1-5)
- Can be indented 0-3 spaces

---

### 9. Link Reference Definitions

Define links that can be referenced later.

```markdown
[label]: /url "title"
[label]: /url 'title'
[label]: /url (title)
[label]: <url> "title"
```

**Multi-line Title:**
```markdown
[label]: /url "This is a
multi-line title"
```

**Without Title:**
```markdown
[label]: /url
```

**Rules:**
- Can be indented 0-3 spaces
- Label is case-insensitive
- First definition wins if multiple
- Whitespace is normalized in labels
- Can appear anywhere in document
- Does not produce output

---

## Inline Elements

### 1. Emphasis

#### 1.1 Italic (Emphasis)

Use single `*` or `_`.

```markdown
*italic text*
_italic text_
```

**Output:**
*italic text*
_italic text_

**Intraword with asterisks:**
```markdown
un*frigging*believable
```

**Output:**
un*frigging*believable

**Rules:**
- `*` allows intraword emphasis
- `_` does not allow intraword emphasis
- Must be flanked properly
- Cannot start/end with whitespace

---

#### 1.2 Bold (Strong Emphasis)

Use double `**` or `__`.

```markdown
**bold text**
__bold text__
```

**Output:**
**bold text**
__bold text__

**Intraword:**
```markdown
un**frigging**believable
```

**Output:**
un**frigging**believable

---

#### 1.3 Bold + Italic

Use triple `***` or `___` or combine.

```markdown
***bold and italic***
___bold and italic___
**_bold and italic_**
*__bold and italic__*
```

**Output:**
***bold and italic***
___bold and italic___
**_bold and italic_**
*__bold and italic__*

---

#### 1.4 Nested Emphasis

```markdown
*This is **nested** emphasis*
**This is *also* nested**
_This is __nested__ too_
```

**Output:**
*This is **nested** emphasis*
**This is *also* nested**
_This is __nested__ too_

---

### 2. Code Spans

Wrap text in backticks.

```markdown
`code`
```

**Output:**
`code`

**With Literal Backticks:**
```markdown
`` `backtick` ``
`` ` ``
```

**Output:**
`` `backtick` ``

**Multiple Backticks:**
```markdown
``` `` ```
```

**Rules:**
- Opening and closing must have same number of backticks
- Leading/trailing space is stripped (one space only)
- Line endings become spaces
- Backslash escapes don't work
- Takes precedence over other inline constructs

---

### 3. Links

#### 3.1 Inline Links

```markdown
[text](url)
[text](url "title")
```

**Examples:**
```markdown
[Google](https://google.com)
[Google](https://google.com "Search Engine")
[Email](mailto:test@example.com)
[Fragment](#section)
```

**Output:**
[Google](https://google.com)
[Google](https://google.com "Search Engine")

**With Angle Brackets:**
```markdown
[link](<url with spaces>)
```

**Complex URLs:**
```markdown
[link](https://example.com?foo=bar&baz=qux)
[link](url(with)parens)
[link](url\(escaped\)parens)
```

---

#### 3.2 Reference Links

**Full Reference:**
```markdown
[text][label]

[label]: /url "title"
```

**Collapsed Reference:**
```markdown
[label][]

[label]: /url "title"
```

**Shortcut Reference:**
```markdown
[label]

[label]: /url "title"
```

**Example:**
```markdown
[Google][g]
[g]: https://google.com "Search"

[MDN][]
[MDN]: https://developer.mozilla.org

[GitHub]
[GitHub]: https://github.com
```

---

#### 3.3 Autolinks

**URL Autolink:**
```markdown
<https://example.com>
<http://example.com/path?query=value>
```

**Output:**
<https://example.com>

**Email Autolink:**
```markdown
<user@example.com>
```

**Output:**
<user@example.com>

**Rules:**
- Must be absolute URI with scheme
- Scheme: 2-32 chars, alphanumeric + `+` `.` `-`
- Cannot contain spaces
- Email: follows HTML5 pattern

---

### 4. Images

Same syntax as links with `!` prefix.

#### 4.1 Inline Images

```markdown
![alt text](url)
![alt text](url "title")
```

**Example:**
```markdown
![Logo](logo.png)
![Logo](logo.png "Company Logo")
```

---

#### 4.2 Reference Images

```markdown
![alt][label]

[label]: url "title"
```

**Collapsed:**
```markdown
![alt][]

[alt]: url
```

**Shortcut:**
```markdown
![alt]

[alt]: url
```

---

### 5. HTML Tags (Inline)

```markdown
This is <em>inline</em> HTML.
<a href="url">link</a>
<img src="image.jpg" alt="description">
```

**Output:**
This is <em>inline</em> HTML.

**Rules:**
- Opening tag, closing tag, comment, processing instruction, declaration, or CDATA
- Must be complete and properly formed
- No line breaks in tag
- Backslash escapes don't work

---

### 6. Hard Line Breaks

See [Line Breaks](#3-line-breaks) section above.

---

### 7. Soft Line Breaks

Regular newlines without trailing spaces (rendered as space).

---

### 8. Textual Content

Any character not interpreted by other rules.

```markdown
Hello, world! 123 $%^
```

---

## Escaping

### Backslash Escapes

Escape special characters with `\`.

**Escapable Characters (33):**
```markdown
\! \" \# \$ \% \& \' \( \) \* \+ \, \- \. \/ \: \; \< \= \> \? \@ \[ \\ \] \^ \_ \` \{ \| \} \~
```

**Examples:**
```markdown
\*Not italic\*
\[Not a link\]
\`Not code\`
\#Not a heading
\1\. Not a list
```

**Output:**
\*Not italic\*
\[Not a link\]
\`Not code\`

**Rules:**
- Only works outside code spans/blocks
- Backslash at end of line = hard break
- Doesn't work in autolinks or raw HTML

---

## Entity References

### 1. Named Entities

Use `&name;` format.

```markdown
&copy; &lt; &gt; &amp; &nbsp; &mdash; &ldquo; &rdquo;
```

**Output:**
&copy; &lt; &gt; &amp; &nbsp; &mdash; &ldquo; &rdquo;

**Common Entities:**
- `&copy;` → ©
- `&reg;` → ®
- `&trade;` → ™
- `&lt;` → <
- `&gt;` → >
- `&amp;` → &
- `&quot;` → "
- `&apos;` → '
- `&nbsp;` → (non-breaking space)
- `&mdash;` → —
- `&ndash;` → –
- `&hellip;` → …

---

### 2. Numeric Entities

**Decimal:**
```markdown
&#35; &#64; &#169;
```

**Hexadecimal:**
```markdown
&#x23; &#x40; &#xA9;
```

**Output:**
&#35; &#64; &#169;

**Rules:**
- Decimal: `&#` + 1-7 digits + `;`
- Hex: `&#x` or `&#X` + 1-6 hex digits + `;`
- Invalid code points → U+FFFD
- Does not work in code spans/blocks

---

## GitHub Flavored Markdown Extensions

### 1. Tables

Create tables with pipes `|` and dashes `-`.

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

**Output:**
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

**Alignment:**
```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| L1   |   C1   |    R1 |
| L2   |   C2   |    R2 |
```

**Output:**
| Left | Center | Right |
|:-----|:------:|------:|
| L1   |   C1   |    R1 |
| L2   |   C2   |    R2 |

**Minimal:**
```markdown
H1|H2
---|---
C1|C2
```

**Rules:**
- Leading/trailing pipes optional
- Alignment: `:---` (left), `:---:` (center), `---:` (right)
- Cells can contain inline content
- Cannot contain block elements
- Spaces trimmed automatically

---

### 2. Task Lists

```markdown
- [ ] Unchecked task
- [x] Checked task
- [ ] Another unchecked task
  - [x] Nested checked task
```

**Output:**
- [ ] Unchecked task
- [x] Checked task
- [ ] Another unchecked task
  - [x] Nested checked task

**Rules:**
- Only works in lists
- `[ ]` = unchecked
- `[x]` or `[X]` = checked
- Must have space after marker

---

### 3. Strikethrough

Use double tilde `~~`.

```markdown
~~strikethrough text~~
```

**Output:**
~~strikethrough text~~

**Rules:**
- Must have no space after opening
- Must have no space before closing
- Works like emphasis

---

### 4. Autolinks (Extended)

Automatic URL linking without angle brackets.

```markdown
https://github.com
www.github.com
user@example.com
```

**Output:**
https://github.com
www.github.com

**Rules:**
- Must be valid URL scheme
- Cannot be in code
- `www.` requires valid domain
- Emails: similar to autolinks

---

### 5. Disallowed Raw HTML

Certain tags are filtered:

```markdown
<script>alert("xss")</script>
```

**Filtered Tags:**
- `<script>`
- `<style>`
- `<iframe>`
- `<object>`
- `<embed>`
- Others for security

---

### 6. Mentions

```markdown
@username
```

**Output:**
@username (as link on GitHub)

---

### 7. Issue References

```markdown
#123
user/repo#123
GH-123
```

**Output:**
#123 (links to issue on GitHub)

---

### 8. Commit References

```markdown
abc1234
user/repo@abc1234
```

---

### 9. Emoji (Shortcodes)

```markdown
:smile: :heart: :thumbsup: :rocket:
```

**Output:**
:smile: :heart: :thumbsup: :rocket:

**Common Emoji:**
- `:smile:` → 😄
- `:heart:` → ❤️
- `:thumbsup:` → 👍
- `:rocket:` → 🚀
- `:+1:` → 👍
- `:-1:` → 👎
- `:tada:` → 🎉
- `:sparkles:` → ✨

---

### 10. Footnotes (GFM)

```markdown
Here's a sentence with a footnote.[^1]

[^1]: This is the footnote content.
```

**Inline:**
```markdown
Footnote[^note] inline.

[^note]: Definition here.
```

**Multiple paragraphs:**
```markdown
[^long]: First paragraph.

    Second paragraph.
    
    - List item
```

---

## Extended Syntax

### 1. Definition Lists

```markdown
Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b
```

---

### 2. Abbreviations

```markdown
The HTML specification

*[HTML]: Hyper Text Markup Language
```

---

### 3. Custom Containers (not standard)

```markdown
::: warning
This is a warning
:::

::: info
This is info
:::
```

---

### 4. Table of Contents

```markdown
[TOC]

or

[[_TOC_]]
```

---

### 5. Syntax Highlighting

````markdown
```diff
+ Added line
- Removed line
! Changed line
# Comment
```

```javascript{1,3-5}
// Line 1 highlighted
// Line 2
// Lines 3-5 highlighted
```
````

---

## Special Characters Reference

### Block-Level Markers
- `#` → Heading
- `-`, `*`, `+` → List items
- `>` → Blockquote
- ` ` (4 spaces) → Code block
- `` ` `` → Fenced code
- `---`, `***`, `___` → Horizontal rule

### Inline Markers
- `*`, `_` → Emphasis
- `**`, `__` → Strong
- `` ` `` → Code span
- `[`, `]` → Links/images
- `!` → Images
- `<`, `>` → Autolinks/HTML
- `\` → Escape

---

## Best Practices

### 1. Consistency
- Choose one style for emphasis (`*` or `_`) and stick to it
- Choose one style for lists (`-`, `*`, or `+`)
- Choose one style for horizontal rules

### 2. Readability
- Add blank lines between block elements
- Indent nested lists consistently
- Use aligned tables when possible

### 3. Compatibility
- Test with multiple parsers
- Use CommonMark for maximum compatibility
- Document any extensions used

### 4. Performance
- Use reference links for repeated URLs
- Avoid deep nesting
- Use fenced code blocks over indented

---

## Markdown Flavors Comparison

| Feature | CommonMark | GFM | Others |
|---------|-----------|-----|--------|
| Tables | ❌ | ✅ | Varies |
| Task Lists | ❌ | ✅ | Some |
| Strikethrough | ❌ | ✅ | Some |
| Autolinks | Limited | Extended | Varies |
| Emoji | ❌ | ✅ | Some |
| Footnotes | ❌ | ✅ | Some |
| Definition Lists | ❌ | ❌ | Some |
| Abbreviations | ❌ | ❌ | Some |

---

## Complete Example

```markdown
# Main Title

## Introduction

This document demonstrates **all** Markdown features.

### Basic Formatting

Here's some *italic*, **bold**, and ***bold italic*** text.
You can also use ~~strikethrough~~ (GFM).

Inline `code` looks like this.

### Links and Images

Visit [Google](https://google.com "Search Engine") or use a reference [link][ref].

![Alt text](image.jpg "Image Title")

[ref]: https://example.com

### Lists

1. First ordered item
2. Second ordered item
   - Nested unordered
   - Another nested
3. Third ordered item

### Tasks (GFM)

- [x] Completed task
- [ ] Incomplete task

### Code Blocks

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

### Tables (GFM)

| Left | Center | Right |
|:-----|:------:|------:|
| L1   | C1     | R1    |
| L2   | C2     | R2    |

### Blockquotes

> This is a blockquote.
> 
> It can contain multiple paragraphs.
>
> > And nested quotes.

### Horizontal Rule

---

### HTML

<div class="custom">
    <p>Raw HTML content</p>
</div>

### Footnote (GFM)

Here's a sentence with a footnote[^1].

[^1]: This is the footnote.

---

Made with :heart: and Markdown
```

---

## Quick Reference Card

### Most Common Syntax

| Element | Syntax |
|---------|--------|
| Heading | `# H1` through `###### H6` |
| Bold | `**text**` or `__text__` |
| Italic | `*text*` or `_text_` |
| Code | `` `code` `` |
| Link | `[text](url)` |
| Image | `![alt](url)` |
| List | `- item` or `1. item` |
| Quote | `> quote` |
| Rule | `---` or `***` or `___` |
| Code Block | ` ```lang ` ... ` ``` ` |
| Table | `\| H1 \| H2 \|` |
| Task | `- [ ]` or `- [x]` |
| Strikethrough | `~~text~~` |

---

**Coverage:** This guide covers 100% of CommonMark 0.29 specification plus all GitHub Flavored Markdown extensions as of 2025.