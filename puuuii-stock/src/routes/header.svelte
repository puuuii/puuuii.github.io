<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 760px) {
		nav {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
