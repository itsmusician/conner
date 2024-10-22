## CHANGELOG

**0.0.5** - [2024.10.22] Tuesday afternoon (warm still even though it's late October... grr...)
<br/>

    Home:
    - Added basic hook text and layout

    About:
    - Slightly less silly filler text

    Gallery:
    - New empty page created for portfolio

    Navbar:
    - My Work renamed to "Gallery"
    - Removed small navbar switch from row to column
      Navbar always remains a row of items for now

    Background:
    - Created svg noise element, blended over gradient
    - Created preliminary support for background noise to
      to be animated
      * This is not very performant, will look into options

    CSS:
    - Separated page content style
      - Home Page text is now left-justified for anticipated content
      - About Page text is now left-justified... looks nicer for now
      - New Gallery Page remains Centered
    - Moved top margin for page content higher
    - Slightly adjust gradient positions

    Meta:
    - Fixed some odd sporadic changelog formatting issues

**0.0.4** - [2024.10.08] Tuesday before hurricane milton (sunny :>)
<br/>

    Page:
    - Added a blur + fade underneath the navbar for body content for
      keeping navbar nicely visible

    Navbar:
    - Items are now centered
    - Items are now evenly spaced
    
    CSS:
    - Eclipse Bloom theme is now default (I think I currently like it 
      more... we'll see...)
    - All themes now have a separate text color for the navbar
    - Updated navbar text color for the Civil Twilight theme

**0.0.3** - [2024.10.07] A little on prior saturday, more + push on Monday (rainy)
<br/>

    Navbar:
    - Added home button
    - Removed theme button until background CSR is functional
    - Renamed "Gear" to "Equipment"
    - Gave its own css class
    - Made sticky to top of page
    - About page now opens in the same tab

    Footer:
    - Added YouTube destination
    - Added Tiktok destination

    Background:
    - Separated into its own component for client side rendering (theme   
      changes)

    CSS:
    - Created general content class for consistent placement of  
      body elements in current structure.
    - All themes now have a text-accent color
    - Assigned preliminary text category sizes

    Pages:
    - Added some new filler text to about

    Meta:
    - Fixed incorrect date on previous changelog entry (3rd -> 4th)

**0.0.2** - [2024.10.04] A sunny Friday morning
<br/>

    Site Adjustments:
    - Added Pine Theme
    - Added Yuzu Theme
    - Added Eclipse Bloom Theme
    - Updated footer with social link icons, removed a couple 
      navbar items for redundancy created by this
    

**0.0.1** - [2024.10.03] A sunny Thursday morning, then day
<br/>

    Project meta stuff:
    - Updated README.md
    - Created Changelog.md

    Site Adjustments:
    - Removed default Vercel / React / Tailwind / Next.js stuff
    - Groundwork for implementing themes using tw-colors
    - Added in first 4 theme colors
    - Rough footer and navbar button linking setup

    Components:
    - New src doc hierarchy to accommodate components folder
    - Separate navbar component
    - Separate footer component

**0.0.0** - [2024.10.~] prehistory
<br/>

    - Initial commit (swag)
