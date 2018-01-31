<template>
<div>
	<div id="menu">
		<div class="config-option"
			v-for="(item, index) in menu"
			:key="index"
			:title="item.title"
			:class="{'active':currentOption === item.label}"
			@click.stop="currentOption=item.label"><i
				class="fa fa-lg fa-fw"
				:class="item.icon"></i></div>
	</div>
	<component id="config"
		:is="panel[this.currentOption]"></component>
</div>
</template>

<script>
import Connection from './config/Connection.vue';
import Record from './config/Record.vue';
import Attribute from './config/Attribute.vue';
import Maintenance from './config/Maintenance.vue';

export default {
	name: 'app-menu',
	data() {
		return {
			currentOption: 'connection',
			menu: [
				{
					title: 'Connection',
					label: 'connection',
					icon: 'fa-link'
				},
				{
					title: 'Recording',
					label: 'record',
					icon: 'fa-instagram'
				},
				{
					title: 'Attribute',
					label: 'attribute',
					icon: 'fa-bars'
				},
				{
					title: 'Maintenance',
					label: 'maintenance',
					icon: 'fa-cogs'
				}
			]
		}
	},
	computed: {
		panel() {
			return {
				connection: Connection,
				record: Record,
				attribute: Attribute,
				maintenance: Maintenance
			}
		}
	}
}
</script>

<style lang="less">
@import '../global.less';

#menu {
	width: @menu;
	height: 100%;
	background: @main;
	position: absolute;
	overflow-x: hidden;
	overflow-y: auto;
	
	.config-option {
		width: @menu;
		height: @menu;
		position: relative;

		.fa {
			display: block;
			color: @secondary;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.config-option.active {
		background-color:@secondary;

		.fa {
			color: @main;
		}
	}
}
#config {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: @menu;
	overflow: hidden;
	background: @secondary;
	padding: 15px 20px;
}
</style>
