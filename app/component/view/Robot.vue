<template>
<div>

	<div id="model-robot" class="mx-auto">
		<div class="d-flex justify-content-center">
			<div class="p-1">
				<ul class="list-group">
					<li class="list-group-item">
						<robot-controller :robotMotorIndex="0"></robot-controller>
					</li>
				</ul>
			</div>
		</div>

		<div class="d-flex justify-content-between">
			<div class="p-1">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="1"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="2"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="3"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="4"></robot-controller>
						</li>
					</ul>
				</div>
			</div>

			<div class="p-1">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="5"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="6"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="7"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="8"></robot-controller>
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
							<robot-controller :robotMotorIndex="9"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="10"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="11"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="12"></robot-controller>
						</li>
					</ul>
				</div>
			</div>
			<div class="p-1">
				<div class="d-flex flex-column">
					<ul class="list-group">
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="13"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="14"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="15"></robot-controller>
						</li>
						<li class="list-group-item">
							<robot-controller :robotMotorIndex="16"></robot-controller>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>
	
</div>
</template>

<script>
import robotController from './RobotController.vue';

export default {
	name: 'table-view',
	components: { robotController },
}
</script>

<style lang="less">
#model-robot {
	width: 600px;
	margin-top: -40px;

	.list-group-item {

	}
}
</style>
