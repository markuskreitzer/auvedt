<script>
	import welcome from '$lib/images/logo.png';
	import welcome_fallback from '$lib/images/logo_cropped.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Vehcile Dynamics Toolkit" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		<br/>Vehicle Dynamics Toolkit
	</h1>
	<h2>
		<strong>
			<a href="https://vehicledynamics.info">vehicledynamics.info</a>
		</strong>
		<br/>
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	h2 {
		text-align: center;
	}
	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		object-fit: scale-down;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
