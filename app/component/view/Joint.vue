<template>
<div id="joint-list" class="mx-auto">
	<div class="table-box">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th style="width: 4rem" class="text-center">Joint</th>
					<th style="width: 25rem" class="text-center">Angle</th>
					<th style="width: 25rem" class="text-center">Speed</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th class="text-center  align-middle">1</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">2</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">3</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">4</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">5</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">6</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">7</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">8</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">9</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">10</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">11</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">12</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">13</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">14</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">15</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">16</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
				<tr>
					<th class="text-center  align-middle">17</th>
					<td><joint-controller></joint-controller></td>
					<td><joint-controller></joint-controller></td>
				</tr>
			</tbody>
		</table>
		
	</div>
</div>
</template>

<script>
import JointController from './JointController.vue';

export default {
	name: 'joint-list',
	components: { JointController }
}
</script>

<style lang="less">
#joint-list {
	margin-top: 20px;
	height: 600px;

	.table-box {
		height: 100%;
		overflow-y: scroll;
	}
}
</style>
