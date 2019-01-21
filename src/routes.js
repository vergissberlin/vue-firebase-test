import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

export const routes = [
	{ 
		path: '*',
		redirect: '/login' 
	},{ 
		path: '/',
		redirect: '/login' 
	},{ 
		path: '/login',
		name: 'Login',
		component: Login, 
	},{ 
		path: '/register', 
		name: 'Register',
		component: Register 
	},{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			requiresAuth: true
		}
	}
];