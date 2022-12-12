<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		For years I've been trying to create models for aerodynamics of vehicles.
		This website hopes to be a repository and api for vehicle technical specifications.
	</p>

	<pre><code>
import requests
r = requests.get("https://vehicledynamics.info/api/v1/'{'query_string'}'")
vehicle_info = r.json()</code></pre>

	<p>
		More example in <a href="https://mathworks.com">MATLAB</a> and other languages to follow.
	</p>

</div>
