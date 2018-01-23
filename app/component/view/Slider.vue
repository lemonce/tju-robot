<template>
<div>
	<div class="slider">
		<input type="range"
			class="angle-control"
			v-model="angle"
			@change="getAngleValue()">
		<span class="angle-value">0°</span>

	</div>

	<div class="slider">
		<input type="range"
			class="speed-control"
			v-model="speed"
			@change="getSpeedValue()">
		<span class="speed-value">0m/s</span>

	</div>
</div>
</template>

<script>
export default {
	name: 'motor-slider',
	data() {
		return {
			angle: 0,
			speed: 0,
			index: this.motorIndex
		}
	},
	props: [ 'motorIndex' ],
	methods: {
		getAngleValue() {
			const angleControl = document.getElementsByClassName('angle-control')[this.index];
			const angleValue = document.getElementsByClassName('angle-value')[this.index];

			angleValue.innerHTML = `${this.angle}°`;

			return angleControl.style.backgroundSize = `${this.angle}% 100%`;
		},
		getSpeedValue() {
			const speedControl = document.getElementsByClassName('speed-control')[this.index];
			const speedValue = document.getElementsByClassName('speed-value')[this.index];

			speedValue.innerHTML = `${this.speed}m/s`;

			return speedControl.style.backgroundSize = `${this.speed}% 100%`;
		}
	}
}
</script>

<style lang="less">
#simulation .slider {
	width: 128px;

	> span {
		font-size:12px;
	}
}
input[type=range] {
	-webkit-appearance: none;
	width: 80px;
	border-radius: 10px;
	background: linear-gradient(#059CFA, #059CFA) no-repeat;
	background-size: 0% 100%;

	&:focus {
		outline: none;
	}

	&::-webkit-slider-runnable-track {
		height: 4px;
		border-radius: 4px;
		border: 1px solid #999;
		position: relative;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 12px;
		width: 12px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: #fff;
		border-radius: 50%;
		border: 1px solid #999;
	}
}
</style>
