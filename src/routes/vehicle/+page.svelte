<script>
    let a = 0;
    let tableData = [
        {
      "A" : "dolorem",
    "B" : "ipsum",
    "C" : "quia"
    },
    {
    "D" : "amet",
    "E" : "consectetur",
    "F" : "adipisci"
    }
    ];

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
        {#each Object.keys(tableData[0]) as columnHeading}
        <th>{columnHeading}</th>
        {/each}
    </tr>
    </thead>
    <tbody>
    {#each Object.values(tableData) as row}
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
    table, th, td {
        border: 1px solid;
        border-collapse: collapse;
        margin: 10px;
    }
</style>