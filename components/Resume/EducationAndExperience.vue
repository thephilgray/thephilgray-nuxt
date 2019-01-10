<template lang="pug">
      transition(name="reveal")
        section.eductation-and-certs(v-if="showRelevant")
          article.eductation-and-certs__education
            h2 Education
            p Virginia Commonwealth University, Richmond, VA <br/>B.A. English (2005 – 2008), minor in Writing, summa cum laude, 3.9 GPA
          article.eductation-and-certs__education  
            h2 Certifications
            p (MCSD: 70-480) Programming in HTML5 with JavaScript and CSS3 (2014)
              br
              | Comp TIA Security+ Certification (2013 – 2016, inactive)
            article.relevant-experience
              h2 Relevant Experience
              .relevant-experience__list
                .relevant-experience__item
                  .relevant-experience__years
                    span 07/2018 – present
                    .relevant-experience__location
                      small Arlington, VA
                  h3.relevant-experinece__company National Capitol Contracting
                  h4.relevant-experinece__title ePublications Technical Specialist (onsite contractor at Department of State)
                  p.relevant-experinece__description Designs and develops interactive EPUBs and e-book plugins using HTML5, CSS3, and JavaScript. Develops custom workflows and tools for testing, debugging, and enhancing developer experience with Node, Gulp, and Webpack.
                .relevant-experience__item
                  .relevant-experience__years
                    span 04/2015 – 07/2018
                    .relevant-experience__location
                      small Washington, DC    
                  h3.relevant-experinece__company BSA | The Software Alliance
                  h4.relevant-experinece__title Digital Manager, 04/2015 - 11/2017
                  h4.relevant-experinece__title Independent Consultant, 11/2017 - 07/2018
                  p.relevant-experinece__description Managed sites for global organization and helped launch its foundation, Software.org. Oversaw content management, development, reporting, and migrations. Designed and developed interactive features, themes, emails, surveys, and microsites.
                .relevant-experience__item
                  .relevant-experience__years
                    span 11/2014 – 04/2015
                    .relevant-experience__location
                      small Washington, DC      
                  h3.relevant-experinece__company ProSol
                  h4.relevant-experinece__title Release Management Coordinator, Data Specialist
                    span &nbsp;(onsite contractor at Department of Labor)
                  p.relevant-experinece__description Coordinated testing and deployment with federal customer and developers. Supported the technology team with application testing, workflow analysis, reporting, data entry, data analysis, and documentation.
                .relevant-experience__item
                  .relevant-experience__years
                    span 04/2014 – 11/2014
                    .relevant-experience__location
                      small Herndon, VA    
                  h3.relevant-experinece__company BAE Systems IT
                  h4.relevant-experinece__title Technical Writer
                    span &nbsp;(contractor)
                  p.relevant-experinece__description Supported the Service Management and Engineering Framework Management teams, helping to maintain and improve ITIL-based policies, processes, and procedures.
                .relevant-experience__item
                  .relevant-experience__years
                    span 12/2010 – 04/2014
                    .relevant-experience__location
                      small Portland, Oregon
                  h3.relevant-experinece__company ITPDX
                  h4.relevant-experinece__title Web Content Editor, Technical Writer, Copywriter
                    span &nbsp;(independent consultant)
                  p.relevant-experinece__description Wrote user and API documentation for custom e-commerce solutions. Provided web content management and training.    
</template>
<script>
export default {
  props: {
    showRelevant: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  font-variant-numeric: oldstyle-nums;
}
p span {
  word-wrap: auto;
}
p,
li {
  font-size: 1.2em;
  line-height: 1.6;
}

p,
li {
  margin-top: 16px;
  margin-bottom: 16px;
}

li {
  text-indent: 0.5em;
  margin-left: 2em;
}
h2 {
  font-size: 2.074em;
  line-height: 1.4;
  margin: 0.25em 0;
}
h3 {
  font-size: 1.728em;
  margin: 0.25em 0;
  line-height: 1.4;
}

.relevant-experience__years {
  margin: 0.5em 0;
}

.relevant-experience__years span {
  background: #262427;
  color: #fff;
  border: 1px solid #262427;
  padding: 0.25em;
}

.relevant-experience__location {
  display: inline;
  margin-left: 0.5em;
  border-bottom: 0.25em solid #262427;
}

.relevant-experience__item {
  border-left: 0.25em solid #262427;
  padding-left: 0.5em;
  margin: 2em 0;
}

/* .relevant-experience__item:not(:first-child) .relevant-experinece__title {
  font-size: 100%;
} */
.relevant-experience__item .relevant-experinece__title {
  font-size: 100%;
}

@media screen and (min-width: 768px) {
  .relevant-experience__list {
    display: grid;
    grid-gap: 1em;
    grid-column: col 3 / span 2;
    grid-row: row 2;
    grid-template-columns: 1fr 1fr;
    .relevant-experience__item {
      margin: 0.5em;
      &:nth-child(1) {
        grid-column: 1 / 3;
        grid-row: 1;
      }
      &:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
      }
      &:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
      }
    }
  }
  .relevant-experience__item {
    border-left: none;
    padding-left: 0;
    &:not(:last-child):not(:nth-last-child(2)) {
      border-bottom: 2px solid #262427;
    }
  }
}

.reveal-enter-active,
.reveal-leave-active {
  transition: opacity 0.25s ease-out;
}

.reveal-enter,
.reveal-leave-to {
  opacity: 0;
}

@media print {
  article.relevant-experience {
    page-break-before: always; //TODO: hack
  }

  .relevant-experinece__description {
    margin-top: 0;
  }

  .relevant-experience__list {
    display: grid;
    grid-gap: 1em;
    grid-column: col 3 / span 2;
    grid-row: row 2;
    grid-template-columns: 1fr 1fr;
  }
  .relevant-experience__list .relevant-experience__item {
    margin: 0.5em;
  }
  .relevant-experience__list .relevant-experience__item:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .relevant-experience__list .relevant-experience__item:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }
  .relevant-experience__list .relevant-experience__item:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }

  .relevant-experience__item {
    border-left: none;
    padding-left: 0;
  }
  .relevant-experience__item:not(:last-child):not(:nth-last-child(2)) {
    // border-bottom: 2px solid #262427;
    border-bottom: 2px solid #999;
  }
  .relevant-experience__location {
    border-bottom: 0.25em solid #999;
  }
}
</style>
