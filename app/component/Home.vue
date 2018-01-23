<template>
<div id="workbench">
	<app-menu id="menu-container"></app-menu>
	<div id="view-container">
		<view-control></view-control>
	</div>
</div>
</template>

<script>
import AppMenu from './Menu.vue';
import ViewControl from './ViewControl.vue';

export default {
	name: 'home',
	components: { AppMenu, ViewControl }
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
	border: 1px solid black;
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