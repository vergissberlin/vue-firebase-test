import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import firebase from 'firebase'

import store from './store/store'

import './assets/style.css'
import './firebaseConfig'

let app = '';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	const currentUser = firebase.auth().currentUser;
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if(requiresAuth && !currentUser) next('login');
	else if(!requiresAuth && currentUser) next('home');
	else next();
})

firebase.auth().onAuthStateChanged(() => {
	if(!app){
		app = new Vue({
			router,
			store,
			render: h => h(App),
		}).$mount('#app');
	}
});