<script lang="ts">
    import AutoComplete from 'simple-svelte-autocomplete';
    let year = 2022;
    let make = "Toyota";
    let model = "Prius";
    let trim = "XLT";
    let car = {'car': [year, make, model, trim]};
    import cars from "../vehicle/cars.json";

    async function searchCar(query_param){
        const response = await fetch("?/demo/cars.json")
        const json = response.json()
        return json.results
    }
</script>

<svelte:head>
    <title>Vehicle Dynamics</title>
    <meta name="description" content="A simulator for vehicle dynamics."/>
</svelte:head>

<form method="post">
<p>
    You searched for {car['car']}<p>
    <AutoComplete items={cars} bind:selectedItem={car} /><p></p>
    Year: <input name="year", type="hidden"><p>
    Make: <input name="make"><p>
    Model: <input name="model"><p>
    Trim: <input name="trim">
    <p>
    <button>Generate Plot</button>
</p>
</form>

<!--    <AutoComplete items={cars} bind:selectedItem={car} />-->
<!--            searchFunction="{searchCar}"-->
<!--            labelFieldName="car"-->
<!--            valueFieldName="car"-->
<!--            delay="200"-->
<p>
Results:
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