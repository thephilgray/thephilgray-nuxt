<template lang="pug">
div
  ResumeHeader
  section.main-section
    article.main-section__overview
      h2 Overview
      p Frontend developer with fullstack skills, a passion for building better interfaces and time-saving tools, and broad industry experience interfacing with clients and supporting development teams in a variety of roles.
      SkillsAndTools
      EducationAndExperience(:showRelevant="showRelevant")
      .btn.btn--full-width(@click="showRelevant = !showRelevant") Show {{!showRelevant ? 'More' : 'Less'}}
</template>
<script>
import ResumeHeader from "@/components/Resume/ResumeHeader";
import SkillsAndTools from "@/components/Resume/SkillsAndTools";
import EducationAndExperience from "@/components/Resume/EducationAndExperience";
export default {
  components: {
    ResumeHeader,
    SkillsAndTools,
    EducationAndExperience
  },
  data() {
    return {
      showRelevant: false
    };
  },
  head() {
    return {
      title: "Resume"
    };
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

h1 {
  letter-spacing: 0.1em;
}

h1 {
  margin: 0;
}

li {
  margin: 0;
  text-indent: 0.5em;
  margin-left: 2em;
}

/* a {
  text-decoration: none;
  color: #35468d;
  &:hover {
    color: #da795c;
  }
} */

img {
  max-width: 100%;
}

// modular scale

h1 {
  font-size: 2.488em;
}

h2 {
  font-size: 2.074em;
  line-height: 1.4;
  margin: 0.25em 0;
}

/* h3 {
  font-size: 1.728em;
  margin: 0.25em 0;
  margin: 0;
  line-height: 1.4;
} */

h4 {
  font-size: 1.44em;
  margin: 0.25em 0;

  line-height: 1.4;
}

h5 {
  font-size: 1.2em;
  margin: 0.25em 0;
}

h6 {
  font-size: 1em;
  margin: 0.25em 0;
}

/* 
.main-header__title {
  text-align: right;
} */

// custom button classes

.btn {
  padding: 0.5em;
  text-align: center;
  cursor: pointer;
  border: 1px solid #262427;
  background: #fff;
  transition: all 0.5s;
  &:hover {
    background: #262427;
    color: #fff;
  }
}

.btn--full-width {
  width: 100%;
}

// nuxt page transitions

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

// base print styles

/* @media print {
  .site-header,
  .wiget-area,
  .site-footer,
  .icons {
    display: none;
  }
} */

/* .main-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
}

.main-header__name {
  padding-right: 1em;
} */

/* article.skills-and-tolls__icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
} */

/* .icons {
  display: flex;
  flex-wrap: wrap;
}

[class^="icon"] {
  margin: 0.5em;
} */

/* @media screen and (min-width: 768px) {

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
} */

/* .relevant-experience__years {
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

.relevant-experience__item:not(:first-child) .relevant-experinece__title {
  font-size: 100%;
} */

/* @media screen and (min-width: 768px) {
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
} */

/* .reveal-enter-active,
.reveal-leave-active {
  transition: opacity 0.25s ease-out;
}

.reveal-enter,
.reveal-leave-to {
  opacity: 0;
} */

@media print {
  .site-header,
  .wiget-area,
  /* .icon-printer, */
  .icons,
  .btn,
  /* .skills-item__icon,
  .skills-item__graphic  */
 {
    display: none;
  }
  // h1:after {
  //   content: 'thephilgray@gmail.com';
  //   display: block;
  //   font-size: 0.5em;
  // }
  /* .skills-and-tools__skills-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  } */
  /* article.relevant-experience {
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
  } */
  /* .skills-and-tools__skills-list {
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
  } */
}
</style>
