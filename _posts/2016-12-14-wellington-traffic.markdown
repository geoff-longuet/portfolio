---
layout: post
title:  "Wellington Traffic Visualisation"
image-sml: "trafficvis-sml.jpg"
image: ["trafficvis.jpg"]
date:   2016-12-14 12:00:00 +1200
categories: portfolio
caption: "A prototype to visualise traffic data in simulated real-time. Produced in partial fulfillment of the requirements for a BE (Hons)."
---
This application visualises traffic data in Wellington, NZ. It does so in simulated real-time.

2016 was the year I produced my honours project, the prototype server simulates a live stream of traffic data based off
of a database dump containing 1.4 million records. This updates browser-based clients viewing the tool in real-time.

The application was developed using Meteor with AngularJS for frontend reactivity. The toolchain consists of various NPM
packages, the most important ones being:

- D3 - For beautiful graphs.
- Angular Leaflet - A powerful reactive mapping tool.
- Moment - To gracefully handle localised timezone data, when operating from another timezone.
- PapaParse - For fast importing of massive CSV files into a Mongo Database.

Some challenges along the way:

- Interpolation of zero values in an efficient manner which are not included in the database dumps.
- Translation of erroneous human-readable locations into latitude, longitude based street segments.
- Rendering and updating a large number of scalable vector graphics efficiently.


The tool was produced in partial fulfillment of my honours project for the Victoria University of Wellington,
with my honours report being the other major contribution.

<a href="{{ 'hon-report.pdf' | prepend: '/files/portfolio/' | prepend: site.baseurl }}" target="_blank">
Honours report here
</a>