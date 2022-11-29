<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    /** @type {import('./$types').ActionData} */
    export let form;

    //import AutoComplete from 'simple-svelte-autocomplete';
    let year = 2022;
    let make = "Toyota";
    let model = "Prius";
    let trim = "XLT";
    let car = {'car': [year, make, model, trim]};
</script>

<svelte:head>
    <title>Vehicle Dynamics</title>
    <meta name="description" content="A simulator for vehicle dynamics."/>
</svelte:head>


<form method="post" action="?/search_car">
<p>
    You searched for {car['car']}<p>
<!--    <AutoComplete searchFunction="{searchCar}" bind:selectedItem={car} /><p></p>-->
    Year: <input name="year" value={year}><p>
    Make: <input name="make" value={make}><p>
    Model: <input name="model" value={model}><p>
    Trim: <input name="trim" value={trim}>
    <p>
    <button>Find</button>
</p>
</form>

<!--    <AutoComplete items={cars} bind:selectedItem={car} />-->
<!--            searchFunction="{searchCar}"-->
<!--            labelFieldName="car"-->
<!--            valueFieldName="car"-->
<!--            delay="200"-->
Results:
<p>
    {#if form?.success}
        <!-- this message is ephemeral; it exists because the page was rendered in
             response to a form submission. it will vanish if the user reloads -->
        <p>Successfully submitted form! Welcome back, {data}</p>
    {/if}
</p>

<!--<form-->
<!--        method="POST"-->
<!--        action="?/enter"-->
<!--        use:enhance={() => {-->
<!--		// prevent default callback from resetting the form-->
<!--		return ({ update }) => {-->
<!--			update({ reset: false });-->
<!--		};-->
<!--	}}-->
<!--&gt;-->
<!--    <a class="abouts" href="/about">About</a>-->
<!--<form/>-->