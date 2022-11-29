<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    // /** @type {import('./$types').ActionData} */
    // export let form;

    //import AutoComplete from 'simple-svelte-autocomplete';
    // let year = 2022;
    // let make = "Toyota";
    // let model = "Prius";
    // let trim = "XLT";
    // let car = {'car': [year, make, model, trim]};
</script>


<svelte:head>
    <title>Vehicle Dynamics</title>
    <meta name="description" content="A simulator for vehicle dynamics."/>
</svelte:head>


<h1>Complete List of Vehicles</h1>
<body>
<table>
    <thead>
    <tr>
        {#each Object.keys(data[0]) as columnHeading}
        <th>{columnHeading}</th>
        {/each}
    </tr>
    </thead>
    <tbody>
    {#each Object.values(data) as row}
        <tr>
            {#each Object.values(row) as cell}
                <td>{cell}</td>
            {/each}
        </tr>
    {/each}
    </tbody>
</table>
</body>


<style>
    .container{
        text-align: center;
        border: 0px solid ;
        /*width: 300px;*/
        /*height: 200px;*/
        /*padding-top: 100px;*/
    }
    #btn{
        font-size: 25px;
    }
    table {
        border: 1px solid;
        margin: 10px;
    }
    table.center {
        margin-left: auto;
        margin-right: auto;
    }
    button.center {
        margin-left: auto;
        margin-right: auto;
    }

    td {
        align-items: center;
        border: 0px solid;
        border-collapse: collapse;
        margin: 10px;
    }
    th {
        font-weight: bold;
        border: 0px solid;
        border-collapse: collapse;
        margin: 10px;
    }
</style>