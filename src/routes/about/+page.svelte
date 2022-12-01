<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is an app made for ELEC-6970, Special Topics in Electrical Engineering, Eduard Muljadi, Professor of Electrical and Computer Engineering. It is to demonstrate a database of
		vehicle dynamics.
	</p>

	<pre><code>
import requests
r = requests.get("https://auvedd.com/'{'query_string'}'")
vehicle_info = r.json()</code></pre>

	<p>
		More example in <a href="https://mathworks.com">MATLAB</a> and other languages to follow.
	</p>

</div>
