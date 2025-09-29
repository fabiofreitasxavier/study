# Extended Markdown Features (CommonMark, GFM, etc.)

1. Strikethrough
This is ~~strikethrough~~ text.


2. Task Lists
- [ ] Incomplete task
- [x] Completed task
- [ ] Another task


3. Tables
| Name     | Age | City       |
|----------|-----|------------|
| Alice    | 25  | London     |
| Bob      | 30  | New York   |
| Charlie  | 28  | San Diego  |

| Align Left | Align Center | Align Right |
|:-----------|:------------:|------------:|
| Apple      | Banana       | Cherry      |
| Dog        | Cat          | Bird        |

4. Footnotes
Here is a sentence with a footnote.[^1]

[^1]: This is the footnote text.
5. Definition Lists
Term 1
: Definition for term 1

Term 2
: Definition for term 2
6. Highlighting (Some Variants)
This is ==highlighted text== (works in some Markdown flavors like Obsidian).
7. Emoji (GitHub/Slack style)
I love Markdown :smile: :+1: :rocket:
8. Automatic Links
<https://example.com>
<user@example.com>
9. Inline HTML
<p style="color:red;">This is red text using HTML inside Markdown.</p>

10. Syntax Highlighting in Code Blocks
<pre> ```javascript function greet(name) { console.log("Hello, " + name); } ``` </pre>

11. Diagrams (Mermaid / PlantUML in some platforms)
```mermaid
graph TD;
    A[Start] --> B{Is Markdown cool?};
    B -- Yes --> C[Keep learning];
    B -- No --> D[Give it another try];


