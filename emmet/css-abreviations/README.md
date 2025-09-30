# CSS Abbreviations


<details><summary>Vendor prefixes</summary>

    - Emmet’s CSS resolver has a nice feature that can greatly improve your CSS3 experience. Every time you precede CSS property or its abbreviation with a hyphen, Emmet automatically creates vendor-prefixed copies of this property. For example, -bdrs abbreviation will be expanded into:

    - webkit-border-radius: ;
    - moz-border-radius: ;
    - border-radius: ;

#### How it works?
Whenever you expand abbreviation with a hyphen in front of it, Emmet removes the hyphen and looks for a snippet definition in snippets.json for the rest of the abbreviation. For example, for -bdrs abbreviation it will look for a bdrs definition. snippet.json has the following definition:

    - "bdrs": "border-radius:|;"

...which means that bdrs will be expanded into border-radius property. If no definition found, the abbreviation itself will be used as a CSS property name.
</details>

<details><summary>Gradients</summary>

</details>

<details><summary>Fuzzy search</summary>
    
    - To make CSS writing a bit easier, Emmet implement fuzzy search logic for CSS snippets: every time you enter unknown abbreviation, Emmet will try to find a closest snippet definition.

    - For example, instead of writing ov:h (overflow: hidden;) abbreviation, you can write ov-h, ovh or even oh. You can play around with the fuzzy search in text editor below. Try to find as many variations as possible (use Tab key to expand abbreviations) for bxz:cb, ovx:h and pos:a snippets.


</details>