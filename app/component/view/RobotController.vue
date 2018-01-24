<template>
<div>
	<div class="slider">
		<input type="range"
			class="angle-control"
			v-model="angle"
			@change="getAngleValue()">
		<span class="angle-value">{{angle}}°</span>

	</div>

	<div class="slider">
		<input type="range"
			class="speed-control"
			v-model="speed"
			@change="getSpeedValue()">
		<span class="speed-value">{{speed}}m/s</span>

	</div>
</div>
</template>

<script>
export default {
	name: 'robot-controller',
	data() {
		return {
			angle: 0,
			speed: 0,
			index: this.robotMotorIndex
		}
	},
	props: [ 'robotMotorIndex' ],
	methods: {
		getAngleValue() {
			const angleControl = document.getElementsByClassName('angle-control')[this.index];

			return angleControl.style.backgroundSize = `${this.angle}% 100%`;
		},
		getSpeedValue() {
			const speedControl = document.getElementsByClassName('speed-control')[this.index];

			return speedControl.style.backgroundSize = `${this.speed}% 100%`;
		}
	}
}
</script>

<style lang="less">
#modle-robot .slider {
	width: 128px;

	> span {
		font-size:12px;
	}

}
#model-robot input[type=range] {
	width: 60px;

	&::-webkit-slider-runnable-track {
		height: 4px;
		border-radius: 4px;
	}

	&::-webkit-slider-thumb {
		height: 12px;
		width: 12px;
	}
}
</style>
