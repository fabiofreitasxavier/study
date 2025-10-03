# Emmet

---
## Table of Contents

1. [HTML Abbreviations](#html-abbreviations)
2. [CSS Abbreviations](#css-abbreviations)
3. [Actions](#actions)
4. [Filters](#filters)
5. [Customization](#customization)
6. [Editor Integration](#editor-integration)

---

## HTML Abbreviations

### 1. Basic Syntax

#### 1.1 Child Operator: `>`

Creates nested elements (parent-child relationship).

```
div>ul>li
```
**Expands to:**
```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

**More Examples:**
```
nav>ul>li>a
→
<nav>
    <ul>
        <li><a href=""></a></li>
    </ul>
</nav>

section>article>h2+p
→
<section>
    <article>
        <h2></h2>
        <p></p>
    </article>
</section>
```

---

#### 1.2 Sibling Operator: `+`

Creates elements at the same level.

```
div+p+span
```
**Expands to:**
```html
<div></div>
<p></p>
<span></span>
```

**More Examples:**
```
header+main+footer
→
<header></header>
<main></main>
<footer></footer>

h1+p+ul+p
→
<h1></h1>
<p></p>
<ul></ul>
<p></p>
```

---

#### 1.3 Climb-up Operator: `^`

Climbs one level up in the tree structure.

```
div>ul>li^p
```
**Expands to:**
```html
<div>
    <ul>
        <li></li>
    </ul>
    <p></p>
</div>
```

**More Examples:**
```
div>h1+p>span^^footer
→
<div>
    <h1></h1>
    <p><span></span></p>
</div>
<footer></footer>

article>h1+section>p^^aside
→
<article>
    <h1></h1>
    <section>
        <p></p>
    </section>
</article>
<aside></aside>
```

**Multiple Climb-ups:**
```
div>div>div>p^^^span
→
<div>
    <div>
        <div>
            <p></p>
        </div>
    </div>
</div>
<span></span>
```

---

#### 1.4 Grouping: `()`

Groups sub-trees to handle complex structures.

```
div>(header>ul>li*2)+footer>p
```
**Expands to:**
```html
<div>
    <header>
        <ul>
            <li></li>
            <li></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

**More Examples:**
```
(div>h1+p)+(div>h2+p)
→
<div>
    <h1></h1>
    <p></p>
</div>
<div>
    <h2></h2>
    <p></p>
</div>

ul>(li>a{Item $})*3
→
<ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li><a href="">Item 3</a></li>
</ul>
```

**Nested Grouping:**
```
(div>dl>(dt+dd)*3)+footer
→
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer></footer>
```

---

#### 1.5 Multiplication: `*`

Multiplies elements.

```
ul>li*5
```
**Expands to:**
```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

**More Examples:**
```
nav>ul>li*3>a
→
<nav>
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
</nav>

table>tr*3>td*4
→
<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
```

---

### 2. Attribute Operators

#### 2.1 ID: `#`

Adds an ID attribute.

```
div#header
```
**Expands to:**
```html
<div id="header"></div>
```

**More Examples:**
```
section#main
→
<section id="main"></section>

form#contact-form
→
<form action="" id="contact-form"></form>
```

---

#### 2.2 Class: `.`

Adds class attribute(s).

```
div.container
```
**Expands to:**
```html
<div class="container"></div>
```

**Multiple Classes:**
```
div.container.wrapper.main
→
<div class="container wrapper main"></div>

button.btn.btn-primary.btn-lg
→
<button class="btn btn-primary btn-lg"></button>
```

**Combined ID and Classes:**
```
div#app.container.fluid
→
<div id="app" class="container fluid"></div>
```

---

#### 2.3 Custom Attributes: `[]`

Adds custom attributes.

```
a[href="#" title="Link"]
```
**Expands to:**
```html
<a href="#" title="Link"></a>
```

**More Examples:**
```
img[src="image.jpg" alt="Description"]
→
<img src="image.jpg" alt="Description">

input[type="text" name="username" placeholder="Enter name"]
→
<input type="text" name="username" placeholder="Enter name">

div[data-id="123" data-name="test"]
→
<div data-id="123" data-name="test"></div>
```

**Attributes without values:**
```
button[disabled]
→
<button disabled></button>

input[required readonly]
→
<input type="text" required readonly>
```

**Boolean Attributes:**
```
script[async defer]
→
<script async defer></script>
```

---

#### 2.4 Numbering: `$`

Auto-increments numbers.

```
ul>li.item$*5
```
**Expands to:**
```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```

**Multiple `$` for padding:**
```
ul>li.item$$*5
→
<ul>
    <li class="item01"></li>
    <li class="item02"></li>
    <li class="item03"></li>
    <li class="item04"></li>
    <li class="item05"></li>
</ul>

ul>li.item$$$*3
→
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
</ul>
```

**Changing Base and Direction:**

```
ul>li.item$@-*5
→ (reverse order, starts at 5)
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>

ul>li.item$@3*5
→ (starts at 3)
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>

ul>li.item$@-3*5
→ (reverse, starts at 7)
<ul>
    <li class="item7"></li>
    <li class="item6"></li>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
</ul>
```

**Multiple Numbering:**
```
div.section$.item$*3
→
<div class="section1 item1"></div>
<div class="section2 item2"></div>
<div class="section3 item3"></div>
```

---

#### 2.5 Text: `{}`

Adds text content.

```
a{Click me}
```
**Expands to:**
```html
<a href="">Click me</a>
```

**More Examples:**
```
h1{Welcome to My Site}
→
<h1>Welcome to My Site</h1>

p{This is a paragraph with some text.}
→
<p>This is a paragraph with some text.</p>

ul>li*3>a{Item $}
→
<ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li><a href="">Item 3</a></li>
</ul>
```

**Text with Siblings:**
```
p{Click }+a{here}+span{ to continue}
→
<p>Click </p>
<a href="">here</a>
<span> to continue</span>
```

**Text without wrapping:**
```
p>{Click }+a{here}+{ to continue}
→
<p>Click <a href="">here</a> to continue</p>
```

---

### 3. Implicit Tag Names

Emmet can infer tag names based on context.

**Inside block elements:**
```
.wrapper
→
<div class="wrapper"></div>

#header
→
<div id="header"></div>
```

**Inside inline elements:**
```
em>.info
→
<em><span class="info"></span></em>

a>.link
→
<a href=""><span class="link"></span></a>
```

**Inside list elements:**
```
ul>.item*3
→
<ul>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
</ul>

ol>.step*3
→
<ol>
    <li class="step"></li>
    <li class="step"></li>
    <li class="step"></li>
</ol>
```

**Inside table elements:**
```
table>.row>.cell
→
<table>
    <tr class="row">
        <td class="cell"></td>
    </tr>
</table>

tr>.col*3
→
<tr>
    <td class="col"></td>
    <td class="col"></td>
    <td class="col"></td>
</tr>
```

**Inside select elements:**
```
select>.option*3
→
<select name="" id="">
    <option value=""></option>
    <option value=""></option>
    <option value=""></option>
</select>
```

**Complete Context Table:**

| Parent Element | Implicit Child |
|----------------|----------------|
| `ul`, `ol` | `li` |
| `table`, `tbody`, `thead`, `tfoot` | `tr` |
| `tr` | `td` |
| `select`, `optgroup` | `option` |
| `dl` | `dt` + `dd` |
| Other | `div` (block) or `span` (inline) |

---

### 4. Lorem Ipsum Generator

Generate placeholder text.

**Basic Usage:**
```
lorem
→
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
```

**Specific Word Count:**
```
lorem5
→
Lorem ipsum dolor sit amet.

lorem10
→
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, consequuntur.

lorem30
→
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla iusto sequi explicabo nihil dolore.
```

**With Elements:**
```
p*3>lorem5
→
<p>Lorem ipsum dolor sit amet.</p>
<p>Repellendus eos officia ut placeat!</p>
<p>Quo fugiat veniam tempora voluptate.</p>

ul>li*5>lorem3
→
<ul>
    <li>Lorem ipsum dolor.</li>
    <li>Temporibus, blanditiis quidem!</li>
    <li>Corporis, accusamus vero?</li>
    <li>Nostrum, quibusdam adipisci.</li>
    <li>Molestiae, iure ullam!</li>
</ul>
```

**Alternate Syntax:**
```
lipsum
→ (same as lorem)

loremN (where N is number of words)
```

---

### 5. Complete HTML Snippet Examples

#### 5.1 Basic HTML5 Template

```
!
or
html:5
```
**Expands to:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### 5.2 Navigation Menu

```
nav#main-nav>ul.nav-list>li.nav-item$*5>a.nav-link[href="#"]{Menu Item $}
```
**Expands to:**
```html
<nav id="main-nav">
    <ul class="nav-list">
        <li class="nav-item1"><a href="#" class="nav-link">Menu Item 1</a></li>
        <li class="nav-item2"><a href="#" class="nav-link">Menu Item 2</a></li>
        <li class="nav-item3"><a href="#" class="nav-link">Menu Item 3</a></li>
        <li class="nav-item4"><a href="#" class="nav-link">Menu Item 4</a></li>
        <li class="nav-item5"><a href="#" class="nav-link">Menu Item 5</a></li>
    </ul>
</nav>
```

#### 5.3 Article with Metadata

```
article.post>header>(h1.title{Post Title}+.meta>time[datetime="2024-01-01"]{Jan 1, 2024}+.author{John Doe})+.content>p*3>lorem20
```

#### 5.4 Card Grid

```
.container>.row>(.col-md-4>.card>.card-body>(h5.card-title{Card $}+p.card-text>lorem15+a.btn[href="#"]{Read More}))*3
```

#### 5.5 Form Structure

```
form#contact-form[action="/submit" method="post"]>(div.form-group>(label[for="name"]{Name}+input#name.form-control[type="text" name="name" required]))*3
```

#### 5.6 Table with Data

```
table.table>thead>tr>th*4{Header $}^^tbody>tr*5>td*4{Data $-$}
```

#### 5.7 Media Gallery

```
.gallery>(figure.gallery-item>img[src="img/photo$.jpg" alt="Photo $"]+figcaption{Photo $})*6
```

---

## CSS Abbreviations

### 1. Property Syntax

Emmet uses intuitive abbreviations for CSS properties and values.

**Basic Pattern:**
```
property + value
```

### 2. Display Properties

```
d → display: block;
d:n → display: none;
d:b → display: block;
d:i → display: inline;
d:ib → display: inline-block;
d:f → display: flex;
d:if → display: inline-flex;
d:g → display: grid;
d:ig → display: inline-grid;
d:tb → display: table;
d:itb → display: inline-table;
```

### 3. Position Properties

```
pos → position: relative;
pos:s → position: static;
pos:a → position: absolute;
pos:r → position: relative;
pos:f → position: fixed;
pos:sticky → position: sticky;

t → top: ;
t10 → top: 10px;
t50p → top: 50%;
t-10 → top: -10px;
tauto → top: auto;

r10 → right: 10px;
b10 → bottom: 10px;
l10 → left: 10px;

z → z-index: 1;
z10 → z-index: 10;
z-1 → z-index: -1;
```

### 4. Float & Clear

```
fl → float: left;
fl:n → float: none;
fl:l → float: left;
fl:r → float: right;

cl → clear: both;
cl:n → clear: none;
cl:l → clear: left;
cl:r → clear: right;
cl:b → clear: both;
```

### 5. Width & Height

```
w → width: ;
w10 → width: 10px;
w100 → width: 100px;
w100p → width: 100%;
w50vw → width: 50vw;
wauto → width: auto;

h → height: ;
h10 → height: 10px;
h100 → height: 100px;
h100p → height: 100%;
h100vh → height: 100vh;
hauto → height: auto;

maw → max-width: ;
maw500 → max-width: 500px;
maw100p → max-width: 100%;

miw → min-width: ;
miw100 → min-width: 100px;

mah → max-height: ;
mah500 → max-height: 500px;

mih → min-height: ;
mih100 → min-height: 100px;
```

### 6. Margin

```
m → margin: ;
m10 → margin: 10px;
m10-20 → margin: 10px 20px;
m10-20-30 → margin: 10px 20px 30px;
m10-20-30-40 → margin: 10px 20px 30px 40px;
mauto → margin: auto;

mt → margin-top: ;
mt10 → margin-top: 10px;
mt-10 → margin-top: -10px;
mtauto → margin-top: auto;

mr10 → margin-right: 10px;
mb10 → margin-bottom: 10px;
ml10 → margin-left: 10px;

mx10 → margin-left: 10px; margin-right: 10px;
my10 → margin-top: 10px; margin-bottom: 10px;
```

### 7. Padding

```
p → padding: ;
p10 → padding: 10px;
p10-20 → padding: 10px 20px;
p10-20-30 → padding: 10px 20px 30px;
p10-20-30-40 → padding: 10px 20px 30px 40px;

pt → padding-top: ;
pt10 → padding-top: 10px;

pr10 → padding-right: 10px;
pb10 → padding-bottom: 10px;
pl10 → padding-left: 10px;

px10 → padding-left: 10px; padding-right: 10px;
py10 → padding-top: 10px; padding-bottom: 10px;
```

### 8. Box Sizing

```
bxz → box-sizing: border-box;
bxz:cb → box-sizing: content-box;
bxz:bb → box-sizing: border-box;
```

### 9. Border

```
bd → border: ;
bd+ → border: 1px solid #000;
bd1 → border: 1px solid;
bd2-s-#f00 → border: 2px solid #f00;

bdt → border-top: ;
bdt+ → border-top: 1px solid #000;
bdt2 → border-top: 2px solid;

bdr → border-right: ;
bdb → border-bottom: ;
bdl → border-left: ;

bdw → border-width: ;
bdw1 → border-width: 1px;
bdw1-2-3-4 → border-width: 1px 2px 3px 4px;

bds → border-style: ;
bds:n → border-style: none;
bds:s → border-style: solid;
bds:dt → border-style: dotted;
bds:ds → border-style: dashed;
bds:db → border-style: double;

bdc → border-color: ;
bdc#f00 → border-color: #f00;
bdcblue → border-color: blue;

bdrs → border-radius: ;
bdrs5 → border-radius: 5px;
bdrs50p → border-radius: 50%;
bdrs5-10 → border-radius: 5px 10px;
```

### 10. Outline

```
ol → outline: ;
ol:n → outline: none;
ol1 → outline: 1px solid;

olw → outline-width: ;
olw1 → outline-width: 1px;

ols → outline-style: ;
ols:s → outline-style: solid;
ols:dt → outline-style: dotted;

olc → outline-color: ;
olc#f00 → outline-color: #f00;

olo → outline-offset: ;
olo5 → outline-offset: 5px;
```

### 11. Overflow

```
ov → overflow: ;
ov:h → overflow: hidden;
ov:v → overflow: visible;
ov:s → overflow: scroll;
ov:a → overflow: auto;

ovx → overflow-x: ;
ovx:h → overflow-x: hidden;
ovx:s → overflow-x: scroll;

ovy → overflow-y: ;
ovy:h → overflow-y: hidden;
ovy:s → overflow-y: scroll;
```

### 12. Visibility

```
v → visibility: ;
v:v → visibility: visible;
v:h → visibility: hidden;
v:c → visibility: collapse;
```

### 13. Opacity

```
op → opacity: ;
op0 → opacity: 0;
op0.5 → opacity: 0.5;
op1 → opacity: 1;
```

### 14. Flexbox

```
fx → flex: ;
fx1 → flex: 1;
fx0 → flex: 0;

fxd → flex-direction: ;
fxd:r → flex-direction: row;
fxd:rr → flex-direction: row-reverse;
fxd:c → flex-direction: column;
fxd:cr → flex-direction: column-reverse;

fxw → flex-wrap: ;
fxw:n → flex-wrap: nowrap;
fxw:w → flex-wrap: wrap;
fxw:wr → flex-wrap: wrap-reverse;

fxf → flex-flow: ;

jc → justify-content: ;
jc:fs → justify-content: flex-start;
jc:fe → justify-content: flex-end;
jc:c → justify-content: center;
jc:sb → justify-content: space-between;
jc:sa → justify-content: space-around;
jc:se → justify-content: space-evenly;

ai → align-items: ;
ai:fs → align-items: flex-start;
ai:fe → align-items: flex-end;
ai:c → align-items: center;
ai:b → align-items: baseline;
ai:s → align-items: stretch;

ac → align-content: ;
ac:fs → align-content: flex-start;
ac:fe → align-content: flex-end;
ac:c → align-content: center;
ac:sb → align-content: space-between;
ac:sa → align-content: space-around;
ac:s → align-content: stretch;

as → align-self: ;
as:a → align-self: auto;
as:fs → align-self: flex-start;
as:fe → align-self: flex-end;
as:c → align-self: center;
as:b → align-self: baseline;
as:s → align-self: stretch;

fxg → flex-grow: ;
fxg0 → flex-grow: 0;
fxg1 → flex-grow: 1;

fxsh → flex-shrink: ;
fxsh0 → flex-shrink: 0;
fxsh1 → flex-shrink: 1;

fxb → flex-basis: ;
fxb:a → flex-basis: auto;
fxb100 → flex-basis: 100px;

ord → order: ;
ord0 → order: 0;
ord1 → order: 1;
ord-1 → order: -1;
```

### 15. Grid

```
gtc → grid-template-columns: ;
gtc1fr → grid-template-columns: 1fr;
gtcrepeat → grid-template-columns: repeat(auto-fit, minmax(0, 1fr));

gtr → grid-template-rows: ;
gtr1fr → grid-template-rows: 1fr;

gta → grid-template-areas: ;

gg → grid-gap: ;
gg10 → grid-gap: 10px;
gg10-20 → grid-gap: 10px 20px;

gcg → grid-column-gap: ;
gcg10 → grid-column-gap: 10px;

grg → grid-row-gap: ;
grg10 → grid-row-gap: 10px;

gc → grid-column: ;
gc1 → grid-column: 1;
gc1-3 → grid-column: 1 / 3;
gc1--1 → grid-column: 1 / -1;

gr → grid-row: ;
gr1 → grid-row: 1;
gr1-3 → grid-row: 1 / 3;

ga → grid-area: ;
ga1-1-2-2 → grid-area: 1 / 1 / 2 / 2;

gac → grid-auto-columns: ;
gac1fr → grid-auto-columns: 1fr;

gar → grid-auto-rows: ;
gar1fr → grid-auto-rows: 1fr;

gaf → grid-auto-flow: ;
gaf:r → grid-auto-flow: row;
gaf:c → grid-auto-flow: column;
gaf:rd → grid-auto-flow: row dense;
gaf:cd → grid-auto-flow: column dense;
```

### 16. Gap (Modern)

```
g → gap: ;
g10 → gap: 10px;
g10-20 → gap: 10px 20px;

rg → row-gap: ;
rg10 → row-gap: 10px;

cg → column-gap: ;
cg10 → column-gap: 10px;
```

### 17. Font Properties

```
f → font: ;
f+ → font: 1em Arial, sans-serif;

ff → font-family: ;
ff:s → font-family: serif;
ff:ss → font-family: sans-serif;
ff:m → font-family: monospace;
ff:a → font-family: Arial, sans-serif;

fz → font-size: ;
fz12 → font-size: 12px;
fz1.5 → font-size: 1.5em;
fz16p → font-size: 16pt;

fw → font-weight: ;
fw:n → font-weight: normal;
fw:b → font-weight: bold;
fw100 → font-weight: 100;
fw400 → font-weight: 400;
fw700 → font-weight: 700;

fs → font-style: ;
fs:n → font-style: normal;
fs:i → font-style: italic;
fs:o → font-style: oblique;

fv → font-variant: ;
fv:n → font-variant: normal;
fv:sc → font-variant: small-caps;
```

### 18. Text Properties

```
c → color: ;
c#f00 → color: #f00;
c#fff → color: #fff;
cred → color: red;

ta → text-align: ;
ta:l → text-align: left;
ta:c → text-align: center;
ta:r → text-align: right;
ta:j → text-align: justify;

td → text-decoration: ;
td:n → text-decoration: none;
td:u → text-decoration: underline;
td:o → text-decoration: overline;
td:l → text-decoration: line-through;

tt → text-transform: ;
tt:n → text-transform: none;
tt:u → text-transform: uppercase;
tt:l → text-transform: lowercase;
tt:c → text-transform: capitalize;

ti → text-indent: ;
ti10 → text-indent: 10px;
ti-10 → text-indent: -10px;

lh → line-height: ;
lh1 → line-height: 1;
lh1.5 → line-height: 1.5;
lh20 → line-height: 20px;

ls → letter-spacing: ;
ls1 → letter-spacing: 1px;
ls-1 → letter-spacing: -1px;

ws → word-spacing: ;
ws5 → word-spacing: 5px;

whs → white-space: ;
whs:n → white-space: normal;
whs:p → white-space: pre;
whs:nw → white