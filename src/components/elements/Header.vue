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
			</nav>
		</div>
	</header>
</template>

<script>
	export  default{
		name: 'header-component',
	}
</script>