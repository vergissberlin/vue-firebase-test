<template>
	<div class="auth-container">
		<p>Let's create an account!</p>
		<input type="text" placeholder="email" v-model="email" />
		<input type="password" placeholder="***" v-model="password" />
		<button>Sign up</button>
		<router-link to="/login">Go back to login page</router-link>
	</div>
</template>

<script>
	export default{
		name: 'register',
		data(){
			return{
				email: '',
				password: ''
			}
		},
		methods: {

		}
	}
</script>