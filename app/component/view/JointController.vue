<template>
<div id="joint">
	<div class="">
		<div class="input-group mb-3">
			<input type="text"
				class="form-control joint-value" v-model="value">
		</div>
		<div class="input-group">
			<input type="range"
				class="joint-control"
				v-model="value"
				@change="getValue()">
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'joint-controller',
	data() {
		return {
			value: 0,
		}
	},
	methods: {
		getValue() {
			const slider = document.getElementsByClassName('joint-control');
			const jointValue = document.getElementsByClassName('joint-value');

			jointValue.value = this.value;

		}
	}
}
</script>

<style lang="less">
#joint-list input[type=range] {

	&::-webkit-slider-runnable-track {
		height: 16px;
		border-radius: 16px;
	}

	&::-webkit-slider-thumb {
		width: 24px;
		height: 24px;
	}
}
</style>
