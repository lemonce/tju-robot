'use strict'

import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';

import App from './App.vue';
import router from './router';

const app = new Vue(
	Object.assign({router}, App)
).$mount('#app');