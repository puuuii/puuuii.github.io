<script lang="ts">
	import { blur } from 'svelte/transition'

	export let url: string
</script>

{#key url}
	<div class="transition" in:blur={{ duration: 200 }}>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
