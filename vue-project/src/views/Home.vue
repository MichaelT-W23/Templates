<template>
	<p class="title">HOME PAGE</p>
	<LinkBtn
		:path="'/second-page'"
		:buttonText="'Go to 2nd page'">
	</LinkBtn>
</template>


<script setup>
import LinkBtn from '../components/RouterBtn.vue';
</script>


<style scoped>

.title {
	color: red;
	font-family: Arial, sans-serif;
}

</style>