# Foodshed of Alachua County

*Interactive app coming soon!*

This project maps out access to food resources in Alachua County. It maps out the following features:

  - [food deserts](https://en.wikipedia.org/wiki/Food_desert), areas with low access to conventional supermarkets
  - [food swamps](https://en.wikipedia.org/wiki/Food_swamps), areas where convenience stores, fast food options, etc. dominate over places providing fresh produce and other "healthy options"
  - informal/subformal food resources in East Gainesville

I completed the food desert and food swamp research at the beginning of the COVID pandemic to better understand the areas Free Grocery Store would be working in. The research on informal/subformal food resources began in Summer 2022 as a final project component for my web-mapping class. The ultimate goal of the project is to paint a picture of the ways people are served and barred from the food system, and the diversity of resources available even in places I label food deserts or food swamps.

## Food Deserts

The USDA food desert is [defined](https://www.ers.usda.gov/data-products/food-access-research-atlas/documentation/) as an area where a significant share of residents are far from a supermarket - often the analysis is done at the level of the block group. In my analysis, I remove the block group aggregation to create raw distances for any residential area in Alachua County, choosing to offer a relative rather than absolute picture of food deserts.

### County scale

We can expect that people living outside of urban areas should have to travel further, for better or worse, to supermarkets, so we look at relative distances across the entire county.

At rural scales, I found Waldo and Micanopy to be much further away from supermarkets than the county average.

<figure>
    <img src="/media/alachua_food-deserts.png" alt="A map of residential food deserts in Alachua County" loading=lazy>
    <figcaption>
        A map of residential food deserts of Alachua County at larger rural scales of 2.5 miles. Areas in black represent non-residential areas. From blue to orange to yellow represents increasing distance from a supermarket.
    </figcaption>
</figure>

### City scale

At the urban scale, East Gainesville had the highest average distances away from supermarkets, with many areas more than 2.5 miles away from the nearest supermarket. For reference, the USDA criterion at urban scales is 1 mile.

<figure>
    <img src="/media/gainesville_food-deserts.png" alt="A map of residential food deserts in Gainesville" loading=lazy>
    <figcaption>
        A map of residential food deserts of Gainesville at urban scales of 0.5 miles. Areas in black represent non-residential areas. From blue to orange to yellow represents increasing distance from a supermarket.
    </figcaption>
</figure>

## Food Swamps

Next, I mapped out the relative quality of accessible food resources. While the Wikipedia definition uses a density-style definition in defining the food swamp, I used a nearest-distance measure, taking the quotient of road-network distance to the nearest convenience store (or similar) over distance to the nearest supermarket. The quotient is necessarily relative, rather than absolute, when measuring the food swamp - it should be compared to the entire dataset.

### County scale

At the rural scale, areas across the county with low food access quotients include Waldo, Fairbanks, west Hawthorne, East Gainesville, Archer, Turkey Creek, and High Springs.

<figure>
    <img src="/media/alachua_food-access-quotient.png" alt="Food access quotients in Alachua County">
    <figcaption>
        A map of food access quotients in Alachua County. Areas in black represent non-residential areas. A lower quotient (in purple) indicates that relative to the average, food access points without fruits and vegetables are much closer/more accessible than supermarkets (the food swamp). A higher quotient (in green) indicates the opposite.
    </figcaption>
</figure>

### City scale

At the urban scale, areas where more healthy food options predominated include much of Northwest Gainesville and a residential area between Tower and Parker Roads in outlying West Gainesville. East Gainesville generally has a low food access quotient, indicating food swamp quality.

<figure>
    <img src="/media/gainesvlle_food-access-quotient.png" alt="Food access quotients in Gainesville" loading=lazy>
    <figcaption>
        <p>A map of food access quotients focused on Gainesville. Areas in black represent non-residential areas. A lower quotient (in purple) indicates that relative to the average, food access points without fruits and vegetables are much closer/more accessible than supermarkets - the food swamp. A higher quotient (in green) indicates the opposite.</p>
    </figcaption>
</figure>

## Implications

Areas with food deserts or low food access quotients are areas of disinvestment. These are areas which are viewed by business and capital as unprofitable. These outcomes are either racialized or class-based. For example, East Gainesville has both high absolute distances to supermarkets and low food access quotients, meaning that the foodshed that's represented in black communities is primarily one where no fresh fruits or vegetables are available regularly. On the other hand, areas like the new Parker Road developments, while suburban in character and distances required to travel, are primarily white and affluent, so convenience stores are of low appeal while supermarkets see these areas as profitable.

Many (not all) people can travel to get fresh fruits and vegetables outside of their immediate neighborhood, so for those people physically getting to food is not the biggest problem. There is a disparity in the distances people travel, but the biggest problem is that food deserts and low food-access-quotient areas have dearths of resources accessible to them, often corresponding with other environmental factors like low physical and financial access to healthcare, more poverty, more police activity, more bail bond areas etc. All together it creates an environment that deems its residents unworthy through its forms.

## The Eastside Informal Food System

Although every social-justice-oriented map of Gainesville tends to paint the same east/west divide, East Gainesville isn't the depauperate landscape that may be in the mind of planners and activists. Besides a single Walmart, fast food, and gas stations, no chains operate on the Eastside. However, there's a rich foodscape characterized by informality and subformality, convenience stores functioning as general stores, food trucks, seafood and meat vendors, and even pop-up tents barely tracked by Google. 

To understand more about the nature of these food systems, I set up a survey to gather statistics about food access points in East Gainesville. The study area was focused on SE Gainesville, defined as east of NE Waldo Rd and S 11th St, west of SE 43rd St, south of NE 8th Ave, and north of SE 23rd Pl.

<figure>
    <img src='/media/gnv-informal-food-screenshot' alt='Screenshot of Gainesville informal food dashboard' loading='lazy'>
    <figcaption>
        Screenshot of ArcGIS Instant App (since archived) of East Gainesville informal and subformal food resources
    </figcaption>
</figure>

Near University and Waldo, there's a general store largely ignored by the City that provides fresh meat, seafood, and grocery options. There are two meat and seafood vendors providing cheap cuts, a few pop-up tents and a couple selling peanuts, and an older man selling Plant City produce from the back of his truck - the only produce vendor in SE Gainesville. Overall, there's a lot of false hype surrounding a mostly impossible big box supermarket in SE Gainesville, without noting the type of low-capital, informal and subformal solutions that already exist.