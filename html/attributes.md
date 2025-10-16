### Link and Navigation Attributes

| Attribute    | Applies To          | Type/Values                          | Notes                  |
|--------------|---------------------|--------------------------------------|------------------------|
| download    | `<a>`, `<area>`    | String                              | Suggest download      |
| href        | `<a>`, `<area>`, `<base>`, `<link>` | URL                              | Target URL            |
| hreflang    | `<a>`, `<area>`, `<link>` | Language code                | Linked language       |
| media       | `<link>`           | Media query*                        | Deprecated            |
| ping        | `<a>`, `<area>`    | URLs                                | Ping on click         |
| referrerpolicy | `<a>`, `<area>`, `<link>` | "no-referrer", "origin", etc. | Referrer policy       |
| rel         | `<a>`, `<area>`, `<link>` | "nofollow", "stylesheet", etc. | Relationship          |
| target      | `<a>`, `<area>`, `<base>` | "_blank", "_self", etc.        | Browsing context      |
| type        | `<link>`           | MIME type                           | Resource type         |

### Form and Input Attributes

| Attribute      | Applies To                  | Type/Values                          | Notes                  |
|----------------|-----------------------------|--------------------------------------|------------------------|
| accept        | `<form>`, `<input type="file">` | MIME types                     | File types            |
| action        | `<form>`                   | URL                                 | Submit URL            |
| alt           | `<input type="image">`     | String                              | Alt text              |
| autocomplete  | Form controls              | "on", "off", etc.                   | Autofill hint         |
| autofocus     | Form controls              | Boolean                             | Auto focus            |
| capture       | `<input type="file">`      | "user", "environment"               | Camera facing         |
| checked       | `<input type="checkbox/radio">` | Boolean                        | Pre-selected          |
| disabled      | Form controls, `<fieldset>` | Boolean                            | Disabled              |
| enctype       | `<form>`                   | "application/x-www-form-urlencoded", etc. | Encoding           |
| for           | `<label>`, `<output>`      | ID                                  | Associated control    |
| form          | Form controls              | Form ID                             | Associate form        |
| formaction    | `<input type="submit/image">`, `<button>` | URL                       | Override action       |
| formenctype   | Same as formaction         | Same as enctype                     | Override enctype      |
| formmethod    | Same as formaction         | "get", "post"                       | Override method       |
| formnovalidate| Same as formaction         | Boolean                             | Skip validation       |
| formtarget    | Same as formaction         | "_blank", "_self", etc.             | Override target       |
| list          | `<input>`                  | Datalist ID                         | Suggestions           |
| max           | `<input type="number/date/etc.">` | Number/date                 | Max value             |
| maxlength     | `<input>`, `<textarea>`    | Positive integer                    | Max characters        |
| method        | `<form>`                   | "get", "post"                       | Submit method         |
| min           | `<input type="number/date/etc.">` | Number/date                 | Min value             |
| minlength     | `<input>`, `<textarea>`    | Non-negative integer                | Min characters        |
| multiple      | `<input type="email/file">`, `<select>` | Boolean                      | Multi-select          |
| name          | Form controls              | String                              | Field name            |
| novalidate    | `<form>`                   | Boolean                             | Skip validation       |
| pattern       | `<input>`                  | Regex                               | Validation pattern    |
| placeholder   | `<input>`, `<textarea>`    | String                              | Hint text             |
| popovertarget | `<button>`, `<input type="button">` | ID                          | Popover target        |
| readonly      | `<input>`, `<textarea>`    | Boolean                             | Read-only             |
| required      | Form controls              | Boolean                             | Required field        |
| size          | `<input>`, `<select>`      | Positive integer                    | Width/items           |
| src           | `<input type="image">`     | URL                                 | Image source          |
| step          | `<input type="number/etc.">` | Number/"any"                     | Increment             |
| type          | `<input>`                  | "text", "email", "number", etc.     | Input type            |
| value         | Form controls              | String/number                       | Initial value         |

### Media and Embedded Content Attributes

| Attribute     | Applies To                  | Type/Values                          | Notes                  |
|---------------|-----------------------------|--------------------------------------|------------------------|
| alt          | `<img>`, `<area>`          | String                              | Alternative text      |
| autoplay     | `<audio>`, `<video>`       | Boolean                             | Auto play             |
| controls     | `<audio>`, `<video>`       | Boolean                             | Show controls         |
| crossorigin  | `<audio>`, `<img>`, `<link>`, `<script>`, `<video>` | "anonymous", "use-credentials" | CORS mode             |
| decoding     | `<img>`                    | "sync", "async", "auto"             | Decode hint           |
| fetchpriority| `<img>`, `<link>`, `<script>` | "high", "low", "auto"            | Fetch priority        |
| height       | `<canvas>`, `<embed>`, `<iframe>`, `<img>`, `<object>`, `<video>` | Integer/CSS | Height                |
| loading      | `<iframe>`, `<img>`        | "eager", "lazy"                     | Loading behavior      |
| loop         | `<audio>`, `<video>`       | Boolean                             | Loop playback         |
| muted        | `<audio>`, `<video>`       | Boolean                             | Muted                 |
| poster       | `<video>`                  | URL                                 | Poster frame          |
| preload      | `<audio>`, `<video>`       | "none", "metadata", "auto"          | Preload hint          |
| src          | `<audio>`, `<embed>`, `<iframe>`, `<img>`, etc. | URL               | Source URL            |
| srcset       | `<img>`, `<source>`        | URLs with descriptors               | Responsive sources    |
| type         | `<embed>`, `<object>`, `<script>`, `<source>` | MIME type           | Resource type         |
| usemap       | `<img>`, `<object>`        | "#mapname"                          | Image map             |
| width        | Same as height             | Integer/CSS                         | Width                 |

### Table Attributes

| Attribute | Applies To    | Type/Values                  | Notes                  |
|-----------|---------------|------------------------------|------------------------|
| align    | Table elements* | "left", "right", etc.       | Use CSS               |
| bgcolor  | Table elements* | Color (name/hex)           | Use CSS               |
| border   | `<table>`*    | Integer                     | Use CSS               |
| colspan  | `<td>`, `<th>`| Positive integer            | Columns spanned       |
| headers  | `<td>`, `<th>`| Space-separated IDs         | Associated headers    |
| rowspan  | `<td>`, `<th>`| Positive integer            | Rows spanned          |
| scope    | `<th>`        | "row", "col", etc.          | Header scope          |

### Other Attributes

| Attribute | Applies To    | Type/Values                  | Notes                  |
|-----------|---------------|------------------------------|------------------------|
| cite     | `<blockquote>`, `<del>`, `<ins>`, `<q>` | URL                 | Source URL            |
| datetime | `<del>`, `<ins>`, `<time>` | Date/time                 | Timestamp             |
| open     | `<details>`, `<dialog>` | Boolean                    | Open state            |