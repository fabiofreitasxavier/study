# Element Types

### Snippets
Snippets are just blocks of plain code, just like in all programmers’ editors. You can type anything there and it will be outputted “as-is”, without any transformation.

### Abbreviations
Abbreviations are actually building blocks with some data hints. Since Emmet is mostly used for writing HTML/XML tags, abbreviation definition uses XML format to describe element.

### Aliases
In the abbreviations section of snippets.json you can also define aliases: a short-hands for commonly used abbreviations. Aliases can be used to define:

    - short names for long tag names;
    - referencing commonly used abbreviations.

    In snippets.json file, you can find the following definitions:

...
"html": {
    "abbreviations": {
        "bq": "blockquote",
        "ol+": "ol>li"
    }
}

In the example above, when you expand bq abbreviation, Emmet will look for blockquote abbreviation’s definition. If it doesn’t exist, it will simply output < blockquote></ blockquote> element. The ol+ abbreviation actually outputs the same result as ol>li does.

The ol+ definition may look ambiguous since it contains + at the end which is also a sibling operator. Emmet correctly expands such abbreviations and the plus sign is left here for historical reasons. Just remember that you don’t need to use plus sign to create abbreviation alias.