<template>
<div id="view-page">
	<div class="d-flex justify-content-end">
		<div class="btn-group toggle-view">
			<button
				type="button"
				class="btn"
				:class="{'active-view': currentView === 'joint'}"
				@click.stop="currentView = 'joint'"><i
					class="fa fa-sliders"></i></button>
			<button
				type="button"
				class="btn"
				:class="{'active-view': currentView === 'robot'}"
				@click.stop="currentView = 'robot'"><i
					class="fa fa-android"></i></button>
		</div>
	</div>

	<component :is="viewList[this.currentView]"></component>
</div>
</template>

<script>
import Joint from './view/Joint.vue';
import Robot from './view/Robot.vue';

export default {
	name: 'view-controller',
	data() {
		return {
			currentView: 'joint',
			viewList: {
				joint: Joint,
				robot: Robot
			}
		}
	},

}
</script>

<style lang="less">
@import '../global.less';

#view-page {
	height: 100%;
	padding: 15px 20px;

	.toggle-view {

		.btn {
			background: @secondary;
			color: @main;
			border: 1px solid @main;

			&:focus {
				box-shadow: 0 0;
			}
		}
		.active-view {
			background: @main;
			color: @secondary;
		}
	}
}
</style>

