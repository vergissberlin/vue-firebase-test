<template>
	<div class="auth-container">
		<h3>Sign in</h3>
		<input type="text" placeholder="email" v-model="email" />
		<input type="password" placeholder="***" v-model="password" />
		<button @click="login">Login</button>
		<p class="err-txt" v-show="error">{{error}}</p>
		<p>Don't have an account yet? <router-link to="/register">Create one here</router-link></p>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default{
		name: 'login',
		data(){
			return{
				email: '',
				password: '',
				error: null
			}
		},
		methods: {
			login(){
				firebase.auth().signInWithEmailAndPassword(this.email, this.password)
					.then(user => {
						console.log(`You're logged in!`);
					})
					.catch(err => {
						this.error = err.message
					});
				// this.$router.replace('home');
			}
		}
	}
</script>