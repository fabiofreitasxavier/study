# HTML 
---

## Table of Contents

1. [Document Structure(8)](#document-structure)
2. [All HTML Elements (84)](#all-html-elements)
3. [Global Attributes (11)](#global-attributes)
4. [Quick Reference](#quick-reference)
5. [Practice](/index.html)
---

## Document Structure

### Basic HTML5 Document

- `<html>` – root element
- `<head>` – metadata container
- `<title>` – title of the page
- `<meta>` – metadata (charset, viewport, etc.)
- `<link>` – link to external resources (like CSS)
- `<style>` – internal CSS
- `<base>` – base URL for relative links
- `<script>` – JavaScript code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```

---

## All HTML Elements

- Sectioning Content (7)
    - `<header>`
    - `<nav>`
    - `<main>`
    - `<section>`
    - `<article>`
    - `<aside>`
    - `<footer>`
- Text Content (6)
    - `<h1>` to `<h6>` – headings
    - `<p>` – paragraph
    - `<br>` – line break
    - `<hr>` – horizontal rule
    - `<blockquote>` – quoted section
    - `<pre>` – preformatted text
- Formatting Elements(10)
    - `<b>` - Bold text
    - `<strong>` - Important text
    - `<i>` - Italic text
    - `<em>` - Emphasized text
    - `<mark>` - Marked text
    - `<small>` - Smaller text
    - `<del>` - Deleted text
    - `<ins>` - Inserted text
    - `<sub>` - Subscript text
    - `<sup>` - Superscript text
- Quotation and Citation Elements (6)
    
    `<blockquote>`,`<q>`, `<abbr>`, `<address>`, `<cite>`, and `<bdo>`
    
- Inline Text Semantics (8)
    - `<a>` – hyperlink
    - `<strong>` – strong importance
    - `<em>` – emphasized
    - `<span>` – generic inline container
    - `<mark>` – highlighted text
    - `<small>` – smaller text
    - `<code>` – code snippet
    - `<sup>` / `<sub>` – superscript / subscript
- HTML Images (4)
    ```
    - <img>
    - <map> (image maps)
    - <picture>
    
- Lists (6)
    - `<ul>` – unordered list
    - `<ol>` – ordered list
    - `<li>` – list item
    - `<dl>` – description list
    - `<dt>` – term
    - `<dd>` – description
- Tables (10)
    - `<table>`
    - `<tr>` – table row
    - `<th>` – table header
    - `<td>` – table data
    - `<thead>`, `<tbody>`, `<tfoot>`, `<caption>`, `<col>`, `<colgroup>`
- Forms (11)
    - `<form>`
    - `<input>`
    - `<label>`
    - `<textarea>`
    - `<button>`
    - `<select>`
    - `<option>`
    - `<fieldset>`
    - `<legend>`
    - `<datalist>`
    - `<output>`
- Media (9)
    - `<img>`
    - `<audio>`
    - `<video>`
    - `<source>`
    - `<track>`
    - `<picture>`
    - `<iframe>`
    - `<embed>`
    - `<object>`
- Scripting & Interactive (4)
    - `<script>`
    - `<noscript>`
    - `<canvas>`
    - `<svg>`
- Web Components (HTML5) (3)
    - `<template>`
    - `<slot>`
    - `<shadow>`
---




---

## Global Attributes

- 
    - `id` – unique identifier
    - `class` – CSS class
    - `style` – inline styles
    - `title` – tooltip text
    - `lang` – language
    - `dir` – text direction (ltr, rtl)
    - `hidden` – hides element
    - `tabindex` – focus order
    - `contenteditable` – makes content editable
    - `draggable` – makes element draggable
    - `data-*` – custom data attributes

