# Markdown Variants

Markdown has many dialects and extensions. Below are the most widely used variants, their purposes, and key features.

---

## CommonMark
- **Spec:** [CommonMark.org](https://commonmark.org/)  
- **Goal:** Create a standardized, unambiguous Markdown spec.  
- **Features:** Defines a consistent core syntax (headings, emphasis, lists, links, images, code, blockquotes, etc.).  
- **Use cases:** Baseline reference for most modern Markdown parsers.  

---

## GitHub Flavored Markdown (GFM)
- **Docs:** [GitHub GFM Spec](https://github.github.com/gfm/)  
- **Features:**  
  - Tables  
  - Task lists (`- [ ]`, `- [x]`)  
  - Strikethrough (`~~text~~`)  
  - Automatic linking of URLs  
  - Emoji shortcodes (`:smile:` → 😄)  
- **Use cases:** READMEs, issues, pull requests, and GitHub wikis.  

---

## Markdown Extra
- **Origin:** PHP-based extension by Michel Fortin.  
- **Features:**  
  - Footnotes  
  - Definition lists  
  - Table support  
  - Attribute lists (e.g., `{#id .class}`)  
- **Use cases:** Websites and blogs running on PHP Markdown Extra.  

---

## MultiMarkdown
- **Origin:** Extension by Fletcher Penney.  
- **Features:**  
  - Tables and footnotes  
  - Citations and bibliography  
  - Metadata blocks  
  - Advanced cross-references  
- **Use cases:** Academic writing, technical documentation.  

---

## R Markdown
- **Docs:** [R Markdown Guide](https://rmarkdown.rstudio.com/)  
- **Features:**  
  - Integrates Markdown with R code chunks.  
  - Generates reports in **HTML**, **PDF**, and **Word**.  
  - Supports citations and LaTeX math.  
- **Use cases:** Data science, reproducible research, teaching materials.  

---

## Pandoc Markdown
- **Docs:** [Pandoc User’s Guide](https://pandoc.org/MANUAL.html#pandocs-markdown)  
- **Features:**  
  - Extended syntax: footnotes, tables, citations.  
  - Cross-references, figures, and math.  
  - Conversion to numerous formats (LaTeX, DOCX, EPUB, etc.).  
- **Use cases:** Academic publishing, multi-format conversion pipelines.  

---

## Obsidian / Notion Flavored Markdown
- **Obsidian:**  
  - Extends Markdown with [[wikilinks]], transclusions, and internal graph links.  
  - Plugins add tables, diagrams, task management.  
- **Notion:**  
  - Markdown import/export with support for headings, lists, checkboxes, code, and inline math.  
  - Rich block-based editor beyond plain Markdown.  
- **Use cases:** Knowledge management, personal wikis, note-taking systems.  

---

📌 **Tip:** Always check which Markdown variant your tool supports — features vary widely!
