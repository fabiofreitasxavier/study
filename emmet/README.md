# Emmet

<details><summary>Concepts</summary> 
<details><summary>Abbreviation Syntax</summary> 
Emmet uses a CSS-selector-like syntax to write concise abbreviations that expand into structured HTML, CSS, or other code. For example, typing div.container>p and expanding it generates a < div class="container"><p></p></div > structure. This syntax is inspired by CSS selectors, making it intuitive for web developers.</details>

<details><summary>Dynamic Parsing</summary> 
Unlike static snippets, Emmet dynamically parses abbreviations at runtime, allowing flexibility to generate code based on the input abbreviation without predefined templates. This enables on-the-fly customization and adaptability.</details>

<details><summary>Snippets Evolution</summary> 
Emmet extends the traditional concept of snippets (predefined code chunks) by allowing developers to write shorthand expressions that are expanded into full code structures, improving speed and reducing repetitive typing.</details>

<details><summary>Web-Developer Focus</summary> 
Emmet is optimized for HTML/XML and CSS workflows but is versatile enough to support other programming languages, making it a universal tool for developers working on web-related tasks.</details>

<details><summary>Editor Integration</summary> 
Emmet functions as a plugin for various text editors, enhancing their capabilities by integrating its abbreviation expansion and actions into the editing environment.
</details>

<details><summary>Entities</summary> 

    -  ⁠HTML elements: Emmet supports generating various HTML elements, such as ⁠ div ⁠, ⁠ p ⁠, ⁠ img ⁠, etc.
    -  ⁠CSS properties: Emmet can generate CSS properties and values using abbreviations.
    -  ⁠Snippets: Customizable code snippets that can be expanded using Emmet.
</details>
<details><summary>Features</summary> 

    -  ⁠Child operator (>): Generates nested HTML elements.
    -  ⁠Sibling operator (+): Generates adjacent HTML elements.
    -  ⁠Multiplication operator ()*: Generates multiple instances of an HTML element.
    -  ⁠Climb-up operator (^): Allows moving up the HTML hierarchy.
    -  ⁠Grouping operator (): Groups elements for more complex structures.
    -  ⁠Attribute operator ([]): Adds attributes to HTML elements.
    -  ⁠Text operator ({}): Adds text content to HTML elements.
    -  ⁠Auto-incrementing numbers ($) : Generates auto-incrementing numbers in HTML element IDs, classes, or text content.
    -  ⁠Lorem Ipsum generation: Generates placeholder text.
    -  ⁠Customizable snippets: Allows creating custom Emmet snippets and profiles.
    -  ⁠Editor integration: Works in multiple code editors, including VS Code, Sublime Text, and Atom.
 </details>

 1. [Abbreviations](./abbreviations/README.md)
 2. [CSS abbreviations](./css-abbreviations/README.md)
 3. [Actions](./actions/README.md)
 4. [Filters](./filters/README.md)
 5. [Customization](./customization/README.md)
 6. [Cheat sheet](./cheat-sheet/README.md)