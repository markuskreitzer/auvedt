<script>
    import {onMount} from "svelte";
    let button_state = 'Start'
    let locations = []
    let location = 'TBD';
    async function getLocation(){
        if (button_state === 'Stop'){
            button_state = 'Start';
            return true;
        }
        if (navigator.geolocation){
            navigator.geolocation.watchPosition(showPosition);
        }else{
            location = "Can't find position"
        }
    }
    async function showPosition(position){
        let a = position.coords.latitude;
        let b = position.coords.longitude;
        let c = position.coords.altitude;
        location = [a, b, c];
        locations.push([a,b,c])
        button_state = 'Stop Tracking'
    }

</script>

<div>
    <form on:submit|preventDefault={getLocation}>
        <button type="submit">{button_state}</button>
    </form>
    <p>
        Position:<br>
        <table>
        <tr>
            <td>Longitude:</td>
            <td>{location[0]}</td>
        </tr>
        <tr>
            <td> Latitude: </td>
            <td>{location[1]}</td>
        </tr>
    <tr>
        <td>Altitude:</td>
        <td>{location[2]}</td>
    </tr>
</table>
        <p>
        Previous Locations:
        {#each locations as x}
            {x}
        {/each}
    </p>

</div>