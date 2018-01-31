'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './global.less';

import Vue from 'vue';

import App from './App.vue';

import router from './router';
import store from './store';

const app = new Vue(
	Object.assign({router, store}, App)
);

window.addEventListener('load', () => {
	app.$mount('#app');
});

document.ondragover = function (event) {
	event.preventDefault();
};
document.ondrop = function (event) {
	event.preventDefault();
};