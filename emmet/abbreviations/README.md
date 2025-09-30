### HTML Abbreviations

#### Basic Syntax
- **Child**: `>` (e.g., `div>p`)
- **Sibling**: `+` (e.g., `div+p`)
- **Climb-up**: `^` (e.g., `div>p^div`)
- **Multiplication**: `*` (e.g., `ul>li*5`)
- **Grouping**: `()` (e.g., `div>(header>ul>li*2)+footer`)

#### Attributes
- **ID**: `#` (e.g., `div#header`)
- **Class**: `.` (e.g., `div.container`)
- **Custom**: `[]` (e.g., `a[href="#" title="Link"]`)
- **Numbering**: `$` (e.g., `li.item$*3`)
- **Multiple `$`**: `$$` (e.g., `li.item$$*3` → item01, item02, item03)

#### Text Content
- **Text**: `{}` (e.g., `p{Click here}`)
- **Lorem Ipsum**: `lorem` or `lorem10` (10 words)

#### Advanced Features
- **Implicit Tag Names**: `.class` → `<div class="class">`
- **Numbering Base**: `$@-` (reverse), `$@3` (start at 3)
- **Text Operators**: `{text}*3`