<template>
<div>
	<h5>Recording</h5>

	<div class="card">
		<div class="card-body">
			<h5 class="card-title">Mode</h5>
			<div class="form">
				<div class="form-check">
					<input type="checkbox" class="form-check-input">
					<label for="">Syncronization</label>
				</div>
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">Capture</h5>

			<button type="button" class="btn btn-outline-secondary btn-sm btn-block mb-2">All Motors</button>
			<div class="d-flex justify-content-between mb-2">
					<button type="button" class="btn btn-outline-secondary btn-sm">R_Arm</button>
					<button type="button" class="btn btn-outline-secondary btn-sm">L_Arm</button>

			</div>
			<div class="d-flex justify-content-between">
					<button type="button" class="btn btn-outline-secondary btn-sm">R_Leg</button>
					<button type="button" class="btn btn-outline-secondary btn-sm">L_Leg</button>

			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">Copy & Exchange</h5>
			<div class="d-flex flex-column">
				<div class="p-2">
					<button type="button"
						class="btn btn-outline-secondary btn-sm btn-block mb-2">R_Arm => L_Arm</button>
					<button type="button"
						class="btn btn-outline-secondary btn-sm btn-block mb-2">R_Arm => L_Arm</button>
					<button type="button"
						class="btn btn-outline-secondary btn-sm btn-block mb-2">R_Arm => L_Arm</button>
				</div>

				<div class="p-2">
					<button type="button"
						class="btn btn-outline-secondary btn-sm btn-block mb-2">R_Leg => L_Leg</button>
					<button type="button"
						class="btn btn-outline-secondary btn-sm btn-block mb-2">R_Leg => L_Leg</button>
					<button type="button"
						class="btn btn-outline-secondary btn-sm btn-block mb-2">R_Leg => L_Leg</button>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<style lang="less">
.d-flex.justify-content-between button {
	display: block;
	width: 48%;
}
</style>
