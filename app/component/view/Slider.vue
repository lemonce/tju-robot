<template>
<div style="width:160px">
	<input type="range"
		class="control-slider"
		v-model="value"
		@change="moveSlider()">
	<span class="slider-value">0</span>
</div>
</template>

<script>
export default {
	name: 'motor-slider',
	data() {
		return {
			value: 0,
			index: this.sliderIndex
		}
	},
	props: [ 'sliderIndex' ],
	methods: {
		moveSlider() {
			const slider = document.getElementsByClassName('control-slider')[this.index];
			const sliderValue = document.getElementsByClassName('slider-value')[this.index];

			sliderValue.innerHTML = this.value;

			return slider.style.backgroundSize = `${this.value}% 100%`;
				
			
		}
	}
}
</script>

<style lang="less">
input[type=range] {
	-webkit-appearance: none;
	width: 120px;
	border-radius: 10px;
	background: linear-gradient(#059CFA, #059CFA) no-repeat;
	background-size: 0% 100%;

	&:focus {
		outline: none;
	}

	&::-webkit-slider-runnable-track {
		height: 8px;
		border-radius: 10px;
		border: 1px solid #999;
		position: relative;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 16px;
		width: 16px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: #fff;
		border-radius: 50%;
		border: 1px solid #999;
	}
}
</style>
