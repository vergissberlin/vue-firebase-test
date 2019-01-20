<template>
	<div class="auth-container">
		<h3>Sign in</h3>
		<input type="text" placeholder="email" v-model="email" />
		<input type="password" placeholder="***" v-model="password" />
		<button @click="login">Login</button>
		<p>Don't have an account yet? <router-link to="/register">Create one here</router-link></p>
	</div>
</template>

<script>
	export default{
		name: 'login',
		data(){
			return{
				email: '',
				password: ''
			}
		},
		methods: {
			login(){
				this.$router.replace('home');
			}
		}
	}
</script>