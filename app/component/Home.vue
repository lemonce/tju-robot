<template>
<div id="workbench">
	<app-menu id="menu-container"></app-menu>
	<div id="view-container">
		<view-controller></view-controller>
	</div>
</div>
</template>

<script>
import AppMenu from './Menu.vue';
import ViewController from './View.vue';

export default {
	name: 'home',
	components: { AppMenu, ViewController }
}
</script>

<style lang="less">
@import '../global.less';

#workbench {
	width: 1280px;
	height: 720px;
	position: relative;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
}
#menu-container {
	width: @menu-container-width;
	height: 100%;
	position: absolute;
	overflow-x: hidden;
	overflow-y: auto;
}
#view-container {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: @menu-container-width;
	overflow: hidden;

}
</style>