<template lang="pug">
section.skills-and-tools
    article.skills-and-tools__skills
        h2 Skills
        Media(:query="{screen:true}")
          .skills-and-tools__skills-list
              .skills-and-tools__skills-item(v-for="(skill, index) in skills")
                  .skills-item__icon(:style="{backgroundPosition: index * -98 + 'px 0'}")
                  .skills-item__header
                      h3 {{skill.title}}
        Media(:query="{print:true}")
          p
            span(v-for="(skill, i) in allSkills")
              span(v-if="i < allSkills.length - 1") {{skill}}, 
              span(v-else) {{skill}}
    article.skills-and-tolls__tools
        h2 Tools
        p
          span(v-for="(tool, i) in tools") {{tool.title + (tools.length - i === 1 ? "" : ",")}} 
          .icons
              div(v-for="(tool, i) in tools", :class="['icon-' + tool.icon, 'icon-' + tool.icon + '-dims']")    
</template>
<script>
import Media from "vue-media";
import "~/assets/iconizr/svg/svg.svg";
import "~/assets/iconizr/iconizr-svg-sprite.scss";
export default {
  components: {
    Media
  },
  data() {
    return {
      skills: [
        { title: "Web Design | Theming", level: 90 },
        { title: "Animation | Visualization", level: 80 },
        { title: "Wireframes | Prototyping", level: 90 },
        { title: "Documentation | Workflows", level: 90 },
        { title: "UI Design | Style Guides", level: 90 },
        { title: "Web App Development | Testing", level: 70 },
        { title: "Consulting | Project Management", level: 80 }
      ],
      tools: [
        { title: "CSS", icon: "css3" },
        { title: "SASS", icon: "sass" },
        { title: "HTML5", icon: "html5" },
        { title: "Pug", icon: "pug" },
        { title: "JavaScript", icon: "javascript" },
        { title: "NodeJS", icon: "nodejs" },
        { title: "PhotoShop", icon: "photoshop" },
        { title: "Sketch", icon: "sketch" },
        { title: "Figma", icon: "figma" },
        { title: "Illustrator", icon: "illustrator" },
        { title: "Bootstrap", icon: "bootstrap" },
        { title: "Vuetify", icon: "vuetify" },
        { title: "Material-UI", icon: "material-ui" },
        { title: "Express", icon: "express" },
        { title: "VueJS", icon: "vuejs" },
        { title: "React", icon: "react" },
        { title: "jQuery", icon: "jquery" },
        { title: "Next", icon: "nextjs" },
        { title: "Nuxt", icon: "nuxt" },
        { title: "Mocha", icon: "mocha" },
        { title: "Jest", icon: "jest" },
        { title: "Git", icon: "git" },
        { title: "Gulp", icon: "gulp" },
        { title: "Webpack", icon: "webpack" },
        { title: "GraphQL", icon: "graphql" },
        { title: "Redux", icon: "redux" },
        { title: "Apollo", icon: "apollo" },
        { title: "MongoDB", icon: "mongodb" },
        { title: "Firebase", icon: "firebase" },
        { title: "Amazon Web Services", icon: "aws" },
        { title: "Heroku", icon: "heroku" }
      ],
      allSkills: [
        "Web Design",
        "Theming",
        "Animation",
        "Visualization",
        "Wireframes",
        "Prototyping",
        "Documentation",
        "Workflows",
        "UI Design",
        "Style Guides",
        "Web App Development",
        "Testing",
        "Consulting",
        "Project Management"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
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
.icons {
  display: flex;
  flex-wrap: wrap;
}

[class^="icon"] {
  margin: 0.5em;
}

article.skills-and-tolls__icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (min-width: 768px) {
  .skills-and-tools__skills-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
}

.skills-and-tools__skills-item {
  border: 0.25em solid #262427;
  padding: 1em 0.25em;
  margin: 0.5em auto;
  color: #262427;
  background: #f8efb6;
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
  background-image: url("~assets/custom-icons-blue.svg");
  background-repeat: no-repeat;
  background-position: 0 0;
  margin: 0 auto;
}

.skills-item__header h3 {
  margin: 0.5em;
}

.skills-item__graphic {
  background: #262427;
  width: 100%;
  height: 2em;
  border: 0.15em solid #fff;
  box-shadow: 1px 2px 4px #262427;
}

.skills-item__graphic--percentage {
  background: #fff;
  height: 100%;
  color: #262427;
  text-align: center;
  font-weight: 700;
}

@media print {
  .icons,
  .skills-item__icon,
  .skills-item__graphic {
    display: none;
  }
  // h1:after {
  //   content: 'thephilgray@gmail.com';
  //   display: block;
  //   font-size: 0.5em;
  // }
  .skills-and-tools__skills-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }

  .skills-and-tools__skills-list {
    font-size: 1.2em;
    line-height: 1.2;
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

  .skills-and-tools__skills-item + .skills-and-tools__skills-item:before {
    display: inline-block;
    float: left;
    content: ",\00a0";
  }
  .skills-item__header {
    h3 {
      font-size: 1em;
      display: inline-block;
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
