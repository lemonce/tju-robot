<template>
<div id="simulation">

	<div class="model-robot">
		<div class="d-flex justify-content-center">
			<div class="p-1">
				<ul class="list-group">
					<li class="list-group-item">
						<motor-slider :motorIndex="0"></motor-slider>
					</li>
				</ul>
			</div>
		</div>

		<div class="d-flex justify-content-between">
			<div class="p-1">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<motor-slider :motorIndex="1"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="2"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="3"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="4"></motor-slider>
						</li>
					</ul>
				</div>
			</div>

			<div class="p-1">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<motor-slider :motorIndex="5"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="6"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="7"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="8"></motor-slider>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="d-flex justify-content-around">
			<div class="p-1">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<motor-slider :motorIndex="9"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="10"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="11"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="12"></motor-slider>
						</li>
					</ul>
				</div>
			</div>
			<div class="p-1">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<motor-slider :motorIndex="13"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="14"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="15"></motor-slider>
						</li>
						<li class="list-group-item">
							<motor-slider :motorIndex="16"></motor-slider>
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
#simulation {
	position: relative;

	.model-robot {
		width: 600px;
		position: absolute;
		margin-top: -40px;
		left: 50%;
		transform: translateX(-50%);

	}
}
</style>
