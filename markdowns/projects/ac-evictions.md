# Evictions of Alachua County

At my <small>brief</small> time working at the Alachua County Labor Coalition (ACLC), I began research on neighborhoods and apartment complexes impacted by housing instability (as measured by evictions). The goal was conducting targeted outreach to residents of Gainesville and Alachua County with eviction prevention and facilitating legal action. The research ended up being longer than my time at the ACLC, so I continued eviction research as part of my Geostatistics class project.

Using a Node.js web scraper written by a Gainesville local, I mined 20 years of eviction data from the Alachua Clerk of Court website. Using tidyverse R, the [postmastr](https://slu-opengis.github.io/postmastr/), and a public county E911 geocoding table, I geocoded 90% of the 34,000 cases.

<figure>
    <img src="/media/evictions-bg.png" alt="A map of Alachua County evictions by raw count. On the left, a legend describing the symbology." loading="lazy">
    <figcaption>
        A map of evictions summarized by 2020 census block group, in non-normalized raw counts.
    </figcaption>
</figure>

*This image is available as an interactive stand-alone web app that maps race along with evictions. [Access the app here](https://ufl.maps.arcgis.com/apps/instant/countdown/index.html?appid=61a56647b54b4d62b4d24fabdb29de45)*

I produced a geographically weighted regression model (R-squared = 0.73) on log-transformed eviction counts. It predicts that evictions in an area are positively correlated with higher Hispanic/Latino and Black proportions, and negatively correlated with increased single-family detached housing and proportion of people with income below the poverty level. Higher weight is given to the proportion of Hispanic/Latinos and Black people in a census block group. It predicts as well a south-north increasing impact of Hispanic/Latino proportions and an east-west increasing spatial impact of Black proportions.

[Download the final write-up](/media/evictions-report.pdf)