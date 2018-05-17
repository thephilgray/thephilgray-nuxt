<template lang="md">
## Case Studies
### Replacing Excel Workbooks with Quick VueJS Apps
#### Productivity Apps
**Challenge:** Replace several unwieldy Excel Workbooks used for templating small datasets with standalone web apps that are faster and more user-friendly for the whole team.

* Develop forms and user interfaces with VueJS templating and Bootstrap
* Use VueJS data, events, methods, watchers, and computed properties to manage and interact with state

**Tags:** VueJS, CSS, Bootstrap

### Planning a New Site for a New Foundation
#### Software.org
**Challenge:** Work with an agency and various stakeholders to realize a new foundation site. Create rich interactive pages and features

* Draft technical requirements
* Design and develop initial animated landing page
* Design initial multipage prototypes with Bootstrap
* Present site at various stages to stakeholders
* Test, troubleshoot, contribute CSS, and coordinate fixes with developers.
* Use VisualBuilder and custom CSS to create visually stunning presentations for the report pages

**Lessons Learned:** The meetings kicking off a new website are often time-consuming and unproductive, reducing the amount of time for development and testing. Everyone eventually comes to a consensus but with something different in mind. Clickable prototypes are very effective for quickly demoing content flow and features and ensuring that everyone is on the same page. Approaching sites with a content-first strategy can significantly reduce time, costs, and miscommunication.

<!-- **Link:** [ https://software.org/](https://software.org/)

**Link:** [ https://software.org/reports/2017-us-software-impact/](https://software.org/reports/2017-us-software-impact/)

**Link:** [ https://software.org/reports/sensor-sensibility/](https://software.org/reports/sensor-sensibility/) -->

**Tags:** CSS, Prototypes, Project Management, Content Management, Bootstrap

### Bringing Life Back to an Old Blog
#### TechPost Responsive Redesign

**Challenge:** Give an old policy blog a fresh responsive look without straying from the branding guidelines or losing any legacy browser compatibility. 

* Design and develop a responsive WordPress theme
* Establish style guidelines from the graphic designer's site banner design
* Create mockups and prototypes and present them to stakeholders
* Write modular SASS, create custom templates, develop features and a functionality plugin for customizing the Archives page and author pages
* Implement caching and asset optimization and work with server admin to optimize performance and TTFB (Time to First Byte) on Azure Cloud

**Lessons Learned:** When contemplating a redesign, businesses often look first to the theme store. For an existing brand, one-size-fits-all solutions are difficult to tame and often lack support for older browsers. I proposed building a custom theme, and while offered a good learning experience, I soon realized I was reinventing the wheel for a rather conventional blog, and it would make more sense to build a child theme for this project. WordPress's out-of-the-box themes are responsive by default, have great browser support, and no feature bloat. I built a child theme atop of twentysixteen, making use of a lot of the base templates so I could spend more time crafting a fresh, modern look that would attract renewed interest in the content.

<!-- **Link:** [ http://techpost.bsa.org/](http://techpost.bsa.org/) -->

**Tags:** SASS, Responsive Design, WordPress, Theming

### Transforming Ink Into Pixels
#### Encryption and Software Impact Studies Microsites
**Challenge:** Create responsive sites from print handouts meant to educate policymakers about the value of encryption and software.

* Extract colors, images, and icons from PDFs and illustrator files
* Edit and optimize images and icons for the web
* Create responsive site templates
* Write modular, well-organized SASS following the SMACSS methodology and using libraries like Susy and Modular Scale
* Write minimal, progressive enhancements with jQuery
* Use external libraries and customize to implement features like a full 50-state interactive SVG map with data
* Test sites on a variety of browsers and devices and BrowserStack

**Lessons Learned:** I wanted the site designs to imitate the look and feel of the print designs as closely as possible while also being fully responsive. I learned responsive typography techniques to capture the essence of the print design on different screen sizes and when aspects of print design don't translate well onto the screen. Also, I learned the value of CSS class naming and module organization conventions.

<!-- **Link:** [ http://encryption.bsa.org/](http://encryption.bsa.org/)

**Link:** [ http://softwareimpact.bsa.org/eu/](http://softwareimpact.bsa.org/eu/)

**Link:** [ http://softwareimpact.bsa.org/](http://softwareimpact.bsa.org/) -->

**Tags:** SASS, SMACSS, Responsive Design, jQuery

### Making an Entrance
#### Cedar Knoll Restaurant Site

**Challenge:** Create an attractive responsive landing page to help establish a new restaurant's brand and online presence. 

* Design and develop site using Gulp and SASS
* Discuss site with business owner and logo designer to establish project requirements and branding guidelines
* Research and write all site copy, gather and edit images, and created custom SVG icons
* Deploy and update with Rsync.

**Lessons Learned:** Designing and developing a site for a new business and brand involves many iterations even after launch. Static sites are ideal for the job, as they cut a lot of overhead and can help clients accept a more streamlined, declarative design process.

Task runners like Gulp, once configured properly, can eliminate a tremendous amount of busy work such as compiling and auto-prefixing SASS, optimizing images, and minimizing code. Writing DRY modular SASS and using a templating language like Nunjucks greatly reduces turnaround time and increases the quality of updates and new features.

I learned a lot about configuring Gulp during the original build phase, but ultimately I migrated to a Gulp starter kit with an optimal set of features for the project.

**Link:** [ https://github.com/philgrayphilgray/cedarknoll](https://github.com/philgrayphilgray/cedarknoll)

**Tags:** SASS, Gulp, Responsive Design, Copywriting, Digital Marketing, SVG

### Making an Old Template Flexible
#### Global Software Survey Site Redesign
**Challenge:** Convert an existing fixed-width site template to be responsive without changing the desktop version or losing existing browser compatibility.

* Restructure template codebase
* Migrate to Jekyll
* Rewrite stylesheets with media queries and Flexbox

**Lessons Learned:** My theory at the time was that you could take any fixed-width stylesheet and strategically apply Flexbox as a progressive enhancement to make it responsive. However, responsive design is a lot simpler when you're working with mobile-first code. I was forced to reverse engineer a lot of the original code. It probably would have been easier if I was permitted to build a new a theme from scratch. In the end, though the desktop version was virtually indistinguishable from the original, under the hood, it was totally different. I even migrated to Jekyll to benefit from its dev server, templating, and asset handling.

**Tags:** Responsive Design, SASS, Jekyll

### Intranet Redesign
**Challenge:** Redesign the company's Intranet to be more user friendly to staff.

* Design intranet pages with a GUI page builder tool. 
* Use CSS to customize pages and components within a rigid and opinionated framework.

**Lessons Learned:** The project stakeholders chose LiveTiles because they wanted to encourage departments to update their own pages and make it easy for non-technical users to do so. However, in practice, this never played out and therefore almost all the content was stale. Given the level of effort and workarounds for customization, I would have pushed for a simpler, more custom solution and centralized content management.

**Tags:** CSS, Responsive Design, SharePoint, LiveTiles

</template>

<style lang="scss" scoped>
p + p {
  text-indent: 0;
}

ul {
  padding: 0 2em;
}
</style>
