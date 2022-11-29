<script>
    let car = {
    'year': [2021,''],
    'make': ['Tesla',''],
    'model': ['Model S',''],
    'trim': ['LR',''],
    'cd': [0.208,'unitless'],
    'cda': [6.05,'m^2'],
    'power': [615, 'kW'],
    'torque': [1301, 'N-m'],
    'mass': [2250,'kg']
};
// function toTitle(input_string: string) {
//     let sentence = input_string.toLowerCase().split(" ");
//     for(let i = 0; i< sentence.length; i++){
//             sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//         }
//         return sentence.join(" ");
//         //return sentence;
//     }
//const capitalize = (input_string: string) => input_string[0].toUpperCase() + input_string.slice(1);
</script>


<svelte:head>
    <title>Add New Vehicle</title>
    <meta name="description" content="A simulator for vehicle dynamics."/>
</svelte:head>


<h1>Submit a new vehicle</h1>
<div class="container">
<form method="post">
<table class="center">
    <thead>
    <tr>
        <th>Attribute</th>
        <th>Value</th>
        <th>Unit</th>
    </tr>
    </thead>
    <tbody>
    {#each Object.entries(car) as entry}
        <tr>
            <td class="">{entry[0]}</td>
            <td><input type="text" value={entry[1][0]}></td>
            <td>{entry[1][1]}</td>
        </tr>
    {/each}
    </tbody>
</table>
    <button>Submit</button>
</form>
</div>

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