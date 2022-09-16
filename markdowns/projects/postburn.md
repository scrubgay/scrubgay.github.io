# Post-Burn Dashboard

This project is a visualization of data created by a team based in Central Florida studying the effects of prescribed fire seasonality on plant responses. Because the research and data are in draft, all species names are anonymized.

## Background

The research studies fire in mesic flatwoods ecosystems, a historically dominant community type in Central Florida and a center of diversity in the Southeast. Flatwoods rely on regular fire for their maintenance - many species require fire to flower and fruit. As a consequence, flatwoods are majorly threatened by fire suppression, as well as development and mismanagement.

(Restoration of) prescribed fire has been implemented across the Southeast, but one of the biggest contentions in the conservation and management community is the role of seasonality in prescribed burning. Many agencies tend to burn in the dormant season due to ease with ample fuels and cool weather. However, there is evidence that historically fires burned across the landscape during the growing season of late spring/early summer ([read more about the debate from the South Carolina DNR](https://www.dnr.sc.gov/news/yr2015/april9/april9_burn.html)). Growing season burns are made difficult by increasingly more unpredictable rain and moisture levels with climate change.

The research tests the effect observed in field of burn seasonality on phenology and regrowth vigor of a few hundred plant species in undisclosed Central Florida sites. It importantly does not test the role of fire itself on phenology or vigor and therefore doesn't have a traditional control. Prescribed fire at these sites can be divided into growing season (Apr-Jun) and dormant season (Dec-Mar). Measurements were taken as early as a few days post-burn to two years post burn. The data were collected from 2020-2022.

## The Dashboard

Using R, and extensive use of the [tidyverse], [shiny], and [grid.extra] libraries, I created an interactive dashboard that allows the user to subset data based on dependent variable (phenology, stem length, leaf length, and culm count), independent temporal variable (a normalized calendar date, and days post burn), and species (anonymized). Data are separated by season of burn. For people in the project, the species names can be de-anonymized with a specific password.

Four views of the data are offered:

  - *raw burn response* - a simple dependent vs independent scatter plot with smoothing for ratio-type dependent variables
  - *temporal response comparison* - a comparison of dependent response to both days post burn and calendar date in the same frame
  - *vigor responses by time* - a season-summarized response of calculated time (in days post burn and calendar date) for a plant to reach a phenological or morphological maximum as determined per site, with confidence intervals
  - *raw vigor responses* - a comparison of the differences between numeric vigor (not phenological) maximums achieved between growing and dormant burns

The data are hosted on Shinyapps, a freemium hosting platform for [shiny] apps. Please be mindful of the time you spend exploring this app - I don't have unlimited free hosting time!

<figure>
	<iframe src="https://scrubgay.shinyapps.io/postburn" title="Post-burn dashboard hosted in Shinyapps" loading=lazy></iframe>
	<figcaption>Post-burn dashboard hosted in Shinyapps. Difficult to view? <a href="https://scrubgay.shinyapps.io/postburn">Open it in full screen</a>.
	</figcaption>
</figure>
