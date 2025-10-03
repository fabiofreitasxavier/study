# HTML 
---

## Table of Contents

1. [Document Structure](#document-structure)
2. [All HTML Elements (142)](#all-html-elements)
3. [Global Attributes (30+)](#global-attributes)
4. [Event Handler Attributes (70+)](#event-handler-attributes)
5. [Input Types (23)](#input-types)
6. [Content Categories](#content-categories)
7. [Quick Reference](#quick-reference)

---

## Document Structure

### Basic HTML5 Document

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

### Document Metadata (8 elements)

#### `<base>` - Document Base URL
```html
<base href="https://example.com/" target="_blank">
```
**Attributes:** `href`, `target`

---

#### `<head>` - Document Metadata Container
```html
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
```

---

#### `<link>` - External Resource Links
```html
<link rel="stylesheet" href="style.css">
<link rel="icon" href="favicon.ico">
<link rel="preload" href="font.woff2" as="font">
```
**Attributes:** `href`, `rel`, `type`, `media`, `sizes`, `as`, `crossorigin`, `referrerpolicy`, `integrity`, `hreflang`, `imagesrcset`, `imagesizes`, `blocking`, `color`, `disabled`, `fetchpriority`

---

#### `<meta>` - Metadata Information
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Page description">
<meta http-equiv="refresh" content="30">
<meta property="og:title" content="Title">
```
**Attributes:** `name`, `content`, `charset`, `http-equiv`, `media`

---

#### `<style>` - Embedded CSS
```html
<style>
    body { background: white; }
</style>
```
**Attributes:** `media`, `blocking`

---

#### `<title>` - Document Title
```html
<title>My Website - Home</title>
```

---

#### `<noscript>` - Fallback Content
```html
<noscript>
    <p>JavaScript is required for this site.</p>
</noscript>
```

---

#### `<template>` - HTML Template Definition
```html
<template id="my-template">
    <div class="item">
        <h3></h3>
        <p></p>
    </div>
</template>
```
**Attributes:** `shadowrootmode`, `shadowrootdelegatesfocus`, `shadowrootclonable`, `shadowrootserializable`, `shadowrootcustomelementregistry`

---

### Sectioning Content (7 elements)

#### `<address>` - Contact Information
```html
<address>
    Contact us at <a href="mailto:info@example.com">info@example.com</a>
</address>
```

---

#### `<article>` - Self-contained Content
```html
<article>
    <h2>Article Title</h2>
    <p>Article content...</p>
</article>
```

---

#### `<aside>` - Tangential Content
```html
<aside>
    <h3>Related Links</h3>
    <ul>
        <li><a href="#">Link 1</a></li>
    </ul>
</aside>
```

---

#### `<footer>` - Footer Section
```html
<footer>
    <p>&copy; 2025 Company Name</p>
</footer>
```

---

#### `<header>` - Introductory Content
```html
<header>
    <h1>Site Name</h1>
    <nav><!-- navigation --></nav>
</header>
```

---

#### `<nav>` - Navigation Links
```html
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</nav>
```

---

#### `<section>` - Thematic Grouping
```html
<section>
    <h2>Section Title</h2>
    <p>Section content...</p>
</section>
```

---

### Heading Content (7 elements)

#### `<h1>` through `<h6>` - Headings
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<h4>Minor Heading</h4>
<h5>Smaller Heading</h5>
<h6>Smallest Heading</h6>
```

---

#### `<hgroup>` - Heading Group
```html
<hgroup>
    <h1>Main Title</h1>
    <h2>Subtitle</h2>
</hgroup>
```

---

### Text Content (17 elements)

#### `<blockquote>` - Extended Quotation
```html
<blockquote cite="https://example.com">
    <p>Quoted text here.</p>
</blockquote>
```
**Attributes:** `cite`

---

#### `<dd>` - Description List Detail
```html
<dl>
    <dt>Term</dt>
    <dd>Definition of the term</dd>
</dl>
```

---

#### `<div>` - Generic Container
```html
<div class="container">
    <p>Content</p>
</div>
```

---

#### `<dl>` - Description List
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

---

#### `<dt>` - Description List Term
See `<dl>` example above.

---

#### `<figcaption>` - Figure Caption
```html
<figure>
    <img src="image.jpg" alt="Description">
    <figcaption>Image caption</figcaption>
</figure>
```

---

#### `<figure>` - Self-contained Illustration
```html
<figure>
    <img src="diagram.png" alt="Diagram">
    <figcaption>Figure 1: System Architecture</figcaption>
</figure>
```

---

#### `<hr>` - Thematic Break
```html
<p>Section 1</p>
<hr>
<p>Section 2</p>
```

---

#### `<li>` - List Item
```html
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>
```
**Attributes:** `value` (only in `<ol>`)

---

#### `<main>` - Main Content
```html
<main>
    <h1>Page Title</h1>
    <p>Main content of the page</p>
</main>
```

---

#### `<ol>` - Ordered List
```html
<ol start="5" reversed>
    <li>Item Five</li>
    <li>Item Four</li>
</ol>
```
**Attributes:** `reversed`, `start`, `type` (`1`, `a`, `A`, `i`, `I`)

---

#### `<p>` - Paragraph
```html
<p>This is a paragraph of text.</p>
```

---

#### `<pre>` - Preformatted Text
```html
<pre>
function hello() {
    console.log("Hello!");
}
</pre>
```

---

#### `<ul>` - Unordered List
```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

---

#### `<menu>` - Menu of Commands
```html
<menu>
    <li><button>Action 1</button></li>
    <li><button>Action 2</button></li>
</menu>
```

---

#### `<search>` - Search Interface
```html
<search>
    <form>
        <input type="search" name="q">
        <button type="submit">Search</button>
    </form>
</search>
```

---

### Inline Text Semantics (30 elements)

#### `<a>` - Anchor/Hyperlink
```html
<a href="https://example.com" target="_blank" rel="noopener">Link</a>
<a href="mailto:user@example.com">Email</a>
<a href="tel:+1234567890">Call</a>
<a href="#section">Internal Link</a>
<a download href="file.pdf">Download</a>
```
**Attributes:** `href`, `target`, `download`, `ping`, `rel`, `hreflang`, `type`, `referrerpolicy`

---

#### `<abbr>` - Abbreviation
```html
<abbr title="HyperText Markup Language">HTML</abbr>
```
**Attributes:** `title`

---

#### `<b>` - Bold Text (no emphasis)
```html
<p><b>Important:</b> Read carefully.</p>
```

---

#### `<bdi>` - Bidirectional Isolation
```html
<p>User <bdi>إيان</bdi> posted a comment.</p>
```

---

#### `<bdo>` - Bidirectional Override
```html
<bdo dir="rtl">This text will be right-to-left</bdo>
```
**Attributes:** `dir` (required: `ltr` or `rtl`)

---

#### `<br>` - Line Break
```html
<p>First line<br>Second line</p>
```

---

#### `<cite>` - Citation
```html
<p><cite>The Great Gatsby</cite> by F. Scott Fitzgerald</p>
```

---

#### `<code>` - Code Fragment
```html
<p>Use the <code>console.log()</code> function.</p>
```

---

#### `<data>` - Machine-readable Data
```html
<data value="12345">Product #12345</data>
```
**Attributes:** `value`

---

#### `<dfn>` - Definition Term
```html
<p><dfn>HTML</dfn> is a markup language.</p>
```
**Attributes:** `title`

---

#### `<em>` - Emphasized Text
```html
<p>I <em>really</em> like this.</p>
```

---

#### `<i>` - Italic Text (no emphasis)
```html
<p><i>Italic text</i> for technical terms.</p>
```

---

#### `<kbd>` - Keyboard Input
```html
<p>Press <kbd>Ctrl</kbd>+<kbd>C</kbd> to copy.</p>
```

---

#### `<mark>` - Marked/Highlighted Text
```html
<p>Search results for <mark>keyword</mark></p>
```

---

#### `<q>` - Short Inline Quotation
```html
<p>He said <q>Hello world</q> and left.</p>
```
**Attributes:** `cite`

---

#### `<rp>` - Ruby Fallback Parenthesis
```html
<ruby>
    漢 <rp>(</rp><rt>kan</rt><rp>)</rp>
</ruby>
```

---

#### `<rt>` - Ruby Annotation Text
```html
<ruby>
    漢 <rt>kan</rt>
</ruby>
```

---

#### `<ruby>` - Ruby Annotation
```html
<ruby>
    明日 <rt>Ashita</rt>
</ruby>
```

---

#### `<s>` - Strikethrough
```html
<p><s>$50</s> Now $30!</p>
```

---

#### `<samp>` - Sample Output
```html
<p>The program output: <samp>Hello World</samp></p>
```

---

#### `<small>` - Side Comment/Small Print
```html
<p><small>Copyright 2025</small></p>
```

---

#### `<span>` - Generic Inline Container
```html
<p>This is <span class="highlight">highlighted</span> text.</p>
```

---

#### `<strong>` - Strong Importance
```html
<p><strong>Warning:</strong> Do not proceed.</p>
```

---

#### `<sub>` - Subscript
```html
<p>H<sub>2</sub>O</p>
```

---

#### `<sup>` - Superscript
```html
<p>E = mc<sup>2</sup></p>
```

---

#### `<time>` - Date/Time
```html
<time datetime="2025-10-01">October 1, 2025</time>
<time datetime="14:30">2:30 PM</time>
```
**Attributes:** `datetime`

---

#### `<u>` - Underline (non-textual)
```html
<p><u>Misspelled</u> word.</p>
```

---

#### `<var>` - Variable
```html
<p>The variable <var>x</var> equals 10.</p>
```

---

#### `<wbr>` - Word Break Opportunity
```html
<p>super<wbr>cali<wbr>fragi<wbr>listic</p>
```

---

#### `<del>` - Deleted Text
```html
<p>Price: <del>$50</del> <ins>$30</ins></p>
```
**Attributes:** `cite`, `datetime`

---

#### `<ins>` - Inserted Text
```html
<p>Price: <del>$50</del> <ins datetime="2025-10-01">$30</ins></p>
```
**Attributes:** `cite`, `datetime`

---

### Image and Multimedia (9 elements)

#### `<area>` - Image Map Area
```html
<map name="workmap">
    <area shape="rect" coords="34,44,270,350" href="page1.html" alt="Region 1">
    <area shape="circle" coords="337,300,44" href="page2.html" alt="Region 2">
</map>
```
**Attributes:** `alt`, `coords`, `shape`, `href`, `target`, `download`, `ping`, `rel`, `referrerpolicy`

---

#### `<audio>` - Audio Content
```html
<audio controls src="audio.mp3"></audio>

<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support audio.
</audio>
```
**Attributes:** `src`, `crossorigin`, `preload`, `autoplay`, `loop`, `muted`, `controls`

---

#### `<img>` - Image
```html
<img src="image.jpg" alt="Description" width="300" height="200">
<img src="image.jpg" alt="Description" loading="lazy">
<img srcset="small.jpg 480w, large.jpg 800w" sizes="(max-width: 600px) 480px, 800px" src="large.jpg" alt="Responsive image">
```
**Attributes:** `alt`, `src`, `srcset`, `sizes`, `crossorigin`, `usemap`, `ismap`, `width`, `height`, `referrerpolicy`, `decoding`, `loading`, `fetchpriority`

---

#### `<map>` - Image Map
```html
<img src="planets.jpg" usemap="#planetmap" alt="Planets">
<map name="planetmap">
    <area shape="circle" coords="90,58,3" href="mercury.html" alt="Mercury">
    <area shape="circle" coords="124,58,8" href="venus.html" alt="Venus">
</map>
```
**Attributes:** `name`

---

#### `<track>` - Text Track for Media
```html
<video controls>
    <source src="movie.mp4" type="video/mp4">
    <track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English">
    <track src="subtitles-es.vtt" kind="subtitles" srclang="es" label="Español">
</video>
```
**Attributes:** `default`, `kind`, `label`, `src`, `srclang`

---

#### `<video>` - Video Content
```html
<video controls width="640" height="360">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    Your browser does not support video.
</video>
```
**Attributes:** `src`, `crossorigin`, `poster`, `preload`, `autoplay`, `playsinline`, `loop`, `muted`, `controls`, `width`, `height`

---

#### `<picture>` - Responsive Images
```html
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Description">
</picture>
```

---

#### `<source>` - Media Source
```html
<!-- In picture -->
<source media="(min-width: 800px)" srcset="large.jpg" type="image/jpeg">

<!-- In video/audio -->
<source src="video.mp4" type="video/mp4">
```
**Attributes:** `type`, `media`, `src`, `srcset`, `sizes`, `width`, `height`

---

#### `<canvas>` - Graphics Canvas
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
    const ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 50, 50);
</script>
```
**Attributes:** `width`, `height`

---

### Embedded Content (5 elements)

#### `<embed>` - External Application
```html
<embed src="file.pdf" type="application/pdf" width="600" height="400">
```
**Attributes:** `src`, `type`, `width`, `height`, (any custom attributes)

---

#### `<iframe>` - Inline Frame
```html
<iframe src="https://example.com" width="600" height="400" title="Example"></iframe>
<iframe src="page.html" sandbox="allow-scripts allow-same-origin"></iframe>
```
**Attributes:** `src`, `srcdoc`, `name`, `sandbox`, `allow`, `allowfullscreen`, `width`, `height`, `referrerpolicy`, `loading`

---

#### `<object>` - External Resource
```html
<object data="movie.swf" type="application/x-shockwave-flash">
    <param name="autoplay" value="true">
    Fallback content
</object>
```
**Attributes:** `data`, `type`, `name`, `form`, `width`, `height`

---

#### `<param>` - Object Parameters (obsolete)
```html
<object data="movie.swf">
    <param name="autoplay" value="true">
</object>
```

---

#### `<portal>` - Embedded Page
```html
<portal src="https://example.com"></portal>
```

---

### Scripting (3 elements)

#### `<script>` - Executable Code
```html
<script src="script.js"></script>
<script>
    console.log('Hello World');
</script>
<script type="module" src="module.js"></script>
<script async src="analytics.js"></script>
<script defer src="app.js"></script>
```
**Attributes:** `src`, `type`, `nomodule`, `async`, `defer`, `crossorigin`, `integrity`, `referrerpolicy`, `blocking`, `fetchpriority`

---

#### `<noscript>` - Non-script Fallback
See Document Metadata section.

---

#### `<canvas>` - Scriptable Graphics
See Image and Multimedia section.

---

### Tables (10 elements)

#### `<caption>` - Table Caption
```html
<table>
    <caption>Monthly Sales Report</caption>
    <!-- table content -->
</table>
```

---

#### `<col>` - Table Column
```html
<table>
    <colgroup>
        <col style="background-color: #f0f0f0;">
        <col span="2" style="background-color: #e0e0e0;">
    </colgroup>
    <!-- table content -->
</table>
```
**Attributes:** `span`

---

#### `<colgroup>` - Column Group
```html
<table>
    <colgroup span="2"></colgroup>
    <colgroup>
        <col>
        <col style="background: yellow;">
    </colgroup>
    <!-- table content -->
</table>
```
**Attributes:** `span`

---

#### `<table>` - Table
```html
<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </tbody>
</table>
```

---

#### `<tbody>` - Table Body
```html
<table>
    <tbody>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
        </tr>
    </tbody>
</table>
```

---

#### `<td>` - Table Data Cell
```html
<td colspan="2" rowspan="3">Merged cell</td>
<td headers="header1 header2">Data</td>
```
**Attributes:** `colspan`, `rowspan`, `headers`

---

#### `<tfoot>` - Table Footer
```html
<table>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>$100</td>
        </tr>
    </tfoot>
</table>
```

---

#### `<th>` - Table Header Cell
```html
<th scope="col">Column Header</th>
<th scope="row">Row Header</th>
<th scope="colgroup">Column Group Header</th>
<th scope="rowgroup">Row Group Header</th>
<th abbr="Abbreviation">Full Header Name</th>
```
**Attributes:** `colspan`, `rowspan`, `headers`, `scope`, `abbr`

---

#### `<thead>` - Table Header
```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
</table>
```

---

#### `<tr>` - Table Row
```html
<tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
</tr>
```

---

### Forms (15 elements)

#### `<button>` - Clickable Button
```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="alert('Hi')">Click Me</button>
<button command="show-modal" commandfor="dialog1">Show Dialog</button>
<button popovertarget="popover1" popovertargetaction="toggle">Toggle</button>
```
**Attributes:** `command`, `commandfor`, `disabled`, `form`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `name`, `popovertarget`, `popovertargetaction`, `type`, `value`

---

#### `<datalist>` - Input Options
```html
<input list="browsers" name="browser">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
</datalist>
```

---

#### `<fieldset>` - Form Control Group
```html
<fieldset disabled>
    <legend>Personal Information</legend>
    <input type="text" name="name">
    <input type="email" name="email">
</fieldset>
```
**Attributes:** `disabled`, `form`, `name`

---

#### `<form>` - User Input Form
```html
<form action="/submit" method="post" enctype="multipart/form-data">
    <input type="text" name="username">
    <button type="submit">Submit</button>
</form>
```
**Attributes:** `accept-charset`, `action`, `autocomplete`, `enctype`, `method`, `name`, `novalidate`, `rel`, `target`

---

#### `<input>` - Input Control
See [Input Types](#input-types) section for complete list.

**Common Attributes:** `accept`, `alpha`, `alt`, `autocomplete`, `checked`, `colorspace`, `dirname`, `disabled`, `form`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `list`, `max`, `maxlength`, `min`, `minlength`, `multiple`, `name`, `pattern`, `placeholder`, `popovertarget`, `popovertargetaction`, `readonly`, `required`, `size`, `src`, `step`, `type`, `value`, `width`

---

#### `<label>` - Input Label
```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<label>
    Email:
    <input type="email" name="email">
</label>
```
**Attributes:** `for`

---

#### `<legend>` - Fieldset Caption
```html
<fieldset>
    <legend>Choose your favorite color</legend>
    <!-- form controls -->
</fieldset>
```

---

#### `<meter>` - Scalar Measurement
```html
<meter value="0.6" min="0" max="1">60%</meter>
<meter value="7" min="0" max="10" low="3" high="8" optimum="9">7 out of 10</meter>
```
**Attributes:** `value`, `min`, `max`, `low`, `high`, `optimum`

---

#### `<optgroup>` - Option Group
```html
<select>
    <optgroup label="Fruits">
        <option>Apple</option>
        <option>Banana</option>
    </optgroup>
    <optgroup label="Vegetables">
        <option>Carrot</option>
        <option>Broccoli</option>
    </optgroup>
</select>
```
**Attributes:** `disabled`, `label`

---

#### `<option>` - Select Option
```html
<select>
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
    <option value="3" disabled>Option 3</option>
</select>
```
**Attributes:** `disabled`, `label`, `selected`, `value`

---

#### `<output>` - Calculation Result
```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="number" id="a" value="0"> +
    <input type="number" id="b" value="0"> =
    <output name="result" for="a b">0</output>
</form>
```
**Attributes:** `for`, `form`, `name`

---

#### `<progress>` - Progress Indicator
```html
<progress value="70" max="100">70%</progress>
<progress>Indeterminate progress</progress>
```
**Attributes:** `value`, `max`

---

#### `<select>` - Selection Control
```html
<select name="country" multiple size="4">
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
</select>
```
**Attributes:** `autocomplete`, `disabled`, `form`, `multiple`, `name`, `required`, `size`

---

#### `<textarea>` - Multi-line Text Input
```html
<textarea name="message" rows="10" cols="50" placeholder="Enter message..."></textarea>
<textarea name="comment" maxlength="500" minlength="10" required></textarea>
```
**Attributes:** `autocomplete`, `cols`, `dirname`, `disabled`, `form`, `maxlength`, `minlength`, `name`, `placeholder`, `readonly`, `required`, `rows`, `wrap`

---

#### `<details>` - Disclosure Widget
```html
<details open>
    <summary>Click to expand</summary>
    <p>Hidden content here...</p>
</details>

<details name="faq">
    <summary>Question 1</summary>
    <p>Answer 1</p>
</details>
```
**Attributes:** `name`, `open`

---

### Interactive Elements (3 elements)

#### `<details>` - Disclosure Widget
See Forms section above.

---

#### `<dialog>` - Dialog Box
```html
<dialog id="myDialog">
    <h2>Dialog Title</h2>
    <p>Dialog content...</p>
    <button onclick="this.closest('dialog').close()">Close</button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">Open Dialog</button>
```
**Attributes:** `open`, `closedby`

---

#### `<summary>` - Details Summary
```html
<details>
    <summary>More Information</summary>
    <p>Additional details...</p>
</details>
```

---

### Web Components (4 elements)

#### `<slot>` - Web Component Slot
```html
<template id="my-template">
    <div>
        <slot name="title">Default Title</slot>
        <slot>Default content</slot>
    </div>
</template>
```
**Attributes:** `name`

---

#### `<template>` - HTML Template
See Document Metadata section.

---

#### Custom Elements
```html
<my-custom-element>
    <span slot="title">Custom Title</span>
</my-custom-element>
```

---

#### Shadow DOM
```html
<div id="host"></div>
<script>
    const host = document.getElementById('host');
    const shadow = host.attachShadow({mode: 'open'});
    shadow.innerHTML = '<p>Shadow DOM content</p>';
</script>
```

---

## Global Attributes

Attributes that can be used on any HTML element:

### Core Global Attributes (30+)

#### `accesskey` - Keyboard Shortcut
```html
<button accesskey="s">Save</button>