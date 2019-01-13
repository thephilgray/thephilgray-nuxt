<template lang="pug">
  section
    article.eductation-and-certs__education
      h2 Education
      p Virginia Commonwealth University, Richmond, VA <br/>B.A. English (2005 – 2008), minor in Writing, summa cum laude, 3.9 GPA
    article.eductation-and-certs__education  
      h2 Certifications
      p (MCSD: 70-480) Programming in HTML5 with JavaScript and CSS3 (2014)
        br
        | Comp TIA Security+ Certification (2013 – 2016, inactive)
</template>


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
