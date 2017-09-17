<template lang="pug">
main
  header.main-header
    h1.main-header__name Phil Gray
    p.main-header__title
      strong Web Manager, UX Developer
    no-ssr
      .icon-printer(@click="print")
  section.main-section
    article.main-section__overview
      h2 Overview
      p Designer/developer with six years of relevant industry experience as a web consultant, including three years designing, prototyping, developing, and project managing cross-browser responsive sites.
      section.skills-and-tools
        article.skills-and-tools__skills
          h2 Skills
          .skills-and-tools__skills-list
            .skills-and-tools__skills-item(v-for="(skill, index) in skills")
              .skills-item__icon(:style="{backgroundPosition: index * -98 + 'px 0'}")
              .skills-item__header
                h3 {{skill.title}}
              .skills-item__graphic
                .skills-item__graphic--percentage(:style="{width: skill.level + '%'}")
                  small {{skill.level}}%
        article.skills-and-tolls__tools
          h2 Tools
          p CSS, SASS, HTML5, JavaScript, Pug, jQuery, VueJS, React, Angular, MongoDB, Heroku, NodeJS, Git, Gulp, Webpack, PhotoShop, Sketch, Figma, Illustrator, Bootstrap, Wordpress
          .icons
            .icon-css.icon-css-dims
            .icon-sass.icon-sass-dims
            .icon-html5.icon-html5-dims
            .icon-js.icon-js-dims
            .icon-es6.icon-es6-dims
            .icon-pug.icon-pug-dims
            .icon-jquery.icon-jquery-dims
            .icon-vue.icon-vue-dims
            .icon-react.icon-react-dims
            .icon-angular.icon-angular-dims
            .icon-mongodb.icon-mongodb-dims
            .icon-heroku.icon-heroku-dims
            .icon-nodejs.icon-nodejs-dims
            .icon-git.icon-git-dims
            .icon-gulp.icon-gulp-dims
            .icon-webpack.icon-webpack-dims
            .icon-sketch.icon-sketch-dims
            .icon-bootstrap.icon-bootstrap-dims
            .icon-wordpress.icon-wordpress-dims
      transition(name="reveal")
        section.eductation-and-certs(v-if="showRelevant")
          article.eductation-and-certs__education
            h2 Education
            p Virginia Commonwealth University, Richmond, VA <br/>B.A. English (2005 – 2008), minor in Writing, summa cum laude, 3.9 GPA
          article.eductation-and-certs__education  
            h2 Certifications
            ul
              li (MCSD: 70-480) Programming in HTML5 with JavaScript and CSS3 (2014)
              li Comp TIA Security+ Certification (2013 – 2016, inactive)
            article.relevant-experience
              h2 Relevant Experience
              .relevant-experience__list
                .relevant-experience__item
                  .relevant-experience__years
                    span 04/2015 – present
                    .relevant-experience__location
                      small Washington, DC    
                  h3 BSA | The Software Alliance
                  h4 Web Manager
                  p Manages sites for global organization and its foundation. Oversees content management, development, reporting, and migrations. Designs, develops, and customizes new properties for targeted campaigns.
                .relevant-experience__item
                  .relevant-experience__years
                    span 11/2014 – 04/2015
                    .relevant-experience__location
                      small Washington, DC      
                  h3 Department of Labor, Office of the Chief Financial Officer
                  p Release Management Coordinator, Data Specialist
                    span &nbsp;(contractor)
                .relevant-experience__item
                  .relevant-experience__years
                    span 04/2014 – 11/2014
                    .relevant-experience__location
                      small Herndon, VA    
                  h3 BAE Systems IT
                  p Technical Writer
                    span &nbsp;(contractor)
                .relevant-experience__item
                  .relevant-experience__years
                    span 12/2010 – 04/2014
                    .relevant-experience__location
                      small Portland, Oregon
                  h3 ITPDX
                  p Web Content Editor, Technical Writer, Copywriter
                    span &nbsp;(independent consultant)
      .btn.btn--full-width(@click="showRelevant = !showRelevant") Show {{!showRelevant ? 'More' : 'Less'}}
</template>
<script>
import '~/assets/icons/icons.svg'
import '~/assets/iconizr-svg-sprite.css'
export default {
  data() {
    return {
      skills: [
        { title: 'Web Design | Theming', level: 80 },
        { title: 'Animation | Visualization', level: 60 },
        { title: 'Wireframes | Prototyping', level: 80 },
        { title: 'Documentation | Workflows', level: 80 },
        { title: 'UI Design | Style Guides', level: 70 },
        { title: 'Web App Development', level: 40 },
        { title: 'Consulting | Project Management', level: 70 }
      ],
      showRelevant: true
    }
  },
  methods: {
    print() {
      window.print()
    }
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
}

.main-header__name {
  padding-right: 1em;
  flex: 3;
}

.main-header__title {
  flex: 2;
}

article.skills-and-tolls__icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  /*     justify-content: space-between; */
}

[class^='icon'] {
  margin: .5em;
}

.icon-printer {
  display: block;
  float: right;
  height: 3em;
  width: 3em;
  background-size: 100%;
  background: url('~assets/icons/printer.svg');
  background-repeat: no-repeat;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .skills-and-tools__skills-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
}

.skills-and-tools__skills-item {
  border: .25em solid #262427;
  padding: 1em .25em;
  margin: .5em auto;
  color: #262427;
  background: #F8EFB6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}

.skills-item__icon {
  display: block;
  width: 100px;
  height: 100px;
  background-image: url('~assets/custom-icons-blue.svg');
  background-repeat: no-repeat;
  background-position: 0 0;
  margin: 0 auto;
}

.skills-item__header h3 {
  margin: .5em;
}

.skills-item__graphic {
  background: #262427;
  width: 100%;
  height: 2em;
  border: .25em solid #fff;
  box-shadow: 1px 2px 4px #262427;
}

.skills-item__graphic--percentage {
  background: #fff;
  height: 100%;
  color: #262427;
  text-align: center;
  font-weight: 700;
}

.relevant-experience__years {
  margin: .5em 0;
}

.relevant-experience__years span {
  background: #262427;
  color: #fff;
  border: 1px solid #262427;
  padding: .25em;
}

.relevant-experience__location {
  display: inline;
  margin-left: .5em;
  border-bottom: .25em solid #262427;
}

.relevant-experience__item {
  border-left: .25em solid #262427;
  padding-left: .5em;
  margin: 2em 0;
}

@media screen and (min-width: 768px) {
  .relevant-experience__list {
    display: grid;
    grid-gap: 1em;
    grid-column: col 3 / span 2;
    grid-row: row 2;
    grid-template-columns: 1fr 1fr;
    .relevant-experience__item {
      margin: .5em;
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
    &:not(:last-child) {
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
  .site-header,
  .wiget-area,
  .icon-printer,
  .icons,
  .btn,
  .skills-item__icon,
  .skills-item__graphic {
    display: none;
  }
  .skills-and-tools__skills-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
  article.relevant-experience {
    page-break-before: always; //TODO: hack
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
  .relevant-experience__item:not(:last-child) {
    // border-bottom: 2px solid #262427;
    border-bottom: 2px solid #999;
  }
  .relevant-experience__location {
    border-bottom: .25em solid #999;
  }
  .skills-and-tools__skills-list {
    font-size: 1em;
    display: inline;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
  }
  .skills-and-tools__skills-item {
    background: none;
    border: none;
    text-align: left;
    display: inline;
    margin: 0;
    padding: 0;
  }

  .skills-and-tools__skills-item+.skills-and-tools__skills-item:before {
    display: inline;
    float: left;
    content: ',\00a0';
  }
  .skills-item__header {

    h3 {
      font-size: 1em;
      display: inline;
      float: left;
      -webkit-margin-before: 0;
      -webkit-margin-after: 0;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      font-weight: normal;
    }
  }
}
</style>
