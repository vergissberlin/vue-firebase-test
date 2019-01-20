import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

export const routes = [
	{ path: '/', 	component: Home },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register }
];