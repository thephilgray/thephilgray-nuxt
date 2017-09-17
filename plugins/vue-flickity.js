import Vue from 'vue'
import Flickity from 'vue-flickity'
if (process.browser) {
  Vue.component('flickity', Flickity)
}
