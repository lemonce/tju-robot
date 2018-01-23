'use strict'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './global.less';

import Vue from 'vue';

import App from './App.vue';

import router from './router';

const app = new Vue(
	Object.assign({router}, App)
);

window.addEventListener('load', () => {
	app.$mount('#app');
})