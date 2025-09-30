# Implicit tag names

In many cases you can skip typing tag names and Emmet will substitute it for you. For example, instead of div.content you can simply write .content and expand it into < div class="content"></ div>.

## How it works
When you expand abbreviation, Emmet tries to grab parent context, e.g. the HTML element, inside which you’re expanding the abbreviation. If the context was grabbed successfully, Emmet uses its name to resolve implicit names.


li for ul and ol
tr for table, tbody, thead and tfoot
td for tr
option for select and optgroup
Take a look at some abbreviations equivalents with implicit and explicit tag names:

.wrap>.content = div.wrap>div.content
em>.info = em>span.info
ul>.item*3 = ul>li.item*3
table>#row$*4>[colspan=2] = table>tr#row$*4>td[colspan=2]