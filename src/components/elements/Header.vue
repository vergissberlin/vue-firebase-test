<template>
	<header>
		<div class="branding">
			<router-link to="/">Home</router-link>	
		</div>
		<div class="navigation">
			<nav class="main-nav">
				<router-link to="/">Home</router-link>
				<router-link to="/login">Login</router-link>
				<router-link to="/register">Register</router-link>
				<a href="#!" @click="logout">Logout</a>
			</nav>
		</div>
	</header>
</template>

<script>
	import firebase from 'firebase'

	export  default{
		name: 'header-component',
		methods: {
			logout(){
				firebase.auth().signOut()
				.then(() => {
					this.$router.replace('login');
				});
			}
		}
	}
</script>