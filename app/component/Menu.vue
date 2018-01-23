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
import Link from './config/Link.vue';
import Record from './config/Record.vue';
import Attribute from './config/Attribute.vue';

export default {
	name: 'app-menu',
	data() {
		return {
			currentOption: 'link',
			menu: [
				{
					title: 'Link',
					label: 'link',
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
			]
		}
	},
	computed: {
		panel() {
			return {
				link: Link,
				record: Record,
				attribute: Attribute
			}
		}
	}
}
</script>

<style lang="less">
@import '../global.less';

#menu {
	width: @menu-width;
	height: 100%;
	background: @main-color;
	position: absolute;
	overflow-x: hidden;
	overflow-y: auto;
	
	.config-option {
		width: @menu-width;
		height: @menu-width;
		position: relative;

		.fa {
			display: block;
			color: @secondary-color;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.config-option.active {
		background-color:@secondary-color;

		.fa {
			color: @main-color;
		}
	}
}
#config {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: @menu-width;
	overflow: hidden;
	background: @secondary-color;
}
</style>
