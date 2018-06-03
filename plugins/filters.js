import Vue from 'vue';
import { format } from 'date-fns';

Vue.filter('date', date => format(new Date(date), 'MMMM Do, YYYY'));
