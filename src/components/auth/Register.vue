<template>
	<div class="auth-container">
		<p>Let's create an account!</p>
		<input type="text" placeholder="email" v-model="email" />
		<input type="password" placeholder="***" v-model="password" />
		<button @click="signup">Sign up</button>
		<p class="err-txt" v-show="error">{{error}}</p>
		<router-link to="/login">Go back to login page</router-link>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default{
		name: 'register',
		data(){
			return{
				email: '',
				password: '',
				error: null
			}
		},
		methods: {
			signup(){
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
					.then(user => {
						console.log('New user has been created!!');
					})
					.catch(err => {
						this.error = err.message;
					});
			}
		}
	}
</script>