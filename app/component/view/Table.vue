<template>
<div id="simulation-table">

	<div class="model-robot">
		<div class="d-flex justify-content-center">
			<div class="p-3">
				<ul class="list-group">
					<li class="list-group-item">
						<motor-slider :sliderIndex="0"></motor-slider>
					</li>
				</ul>
			</div>
		</div>

		<div class="d-flex justify-content-between">
			<div class="p-4">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<motor-slider :sliderIndex="1"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="2"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="3"></motor-slider>
						</li>
					</ul>
				</div>
			</div>

			<div class="p-4">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<motor-slider :sliderIndex="4"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="5"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="6"></motor-slider>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="d-flex justify-content-around">
			<div class="p-3">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<motor-slider :sliderIndex="7"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="8"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="9"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="10"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="11"></motor-slider>
						</li>
					</ul>
				</div>
			</div>
			<div class="p-3">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<motor-slider :sliderIndex="12"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="13"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="14"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="15"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :sliderIndex="16"></motor-slider>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>
	
</div>
</template>

<script>
import MotorSlider from './Slider.vue';

export default {
	name: 'table-view',
	components: { MotorSlider },
}
</script>

<style lang="less">
#simulation-table {
	position: relative;

	.model-robot {
		width: 600px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);

	}
}
</style>
