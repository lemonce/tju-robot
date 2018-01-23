<template>
<div id="view-page">
	<div class="d-flex justify-content-end">
		<div class="btn-group toggle-view">
			<button
				type="button"
				class="btn"
				:class="{'active-view': currentView === 'table'}"
				@click.stop="currentView = 'table'"><i
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
import Table from './view/Table.vue';
import Robot from './view/Robot.vue';

export default {
	name: 'view-control',
	data() {
		return {
			currentView: 'table',
			viewList: {
				table: Table,
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

	.toggle-view {
		margin-top: 15px;
		margin-right: 20px;

		.btn {
			background: @secondary-color;
			color: @main-color;

			&:focus {
				box-shadow: 0 0;
			}
		}
		.active-view {
			background: @main-color;
			color: @secondary-color;
		}
	}
}
</style>

