import {Vehicle} from "../../lib/server/vehicle";
import {load_csv, parse_csv} from "../../lib/server/database";

/** @type {import('./$types').PageServerLoad} */
export async function load(){
    const raw_data = await load_csv();
    const cars = parse_csv(raw_data);
    if (cars){
        console.log(cars);
        return cars;
        //return cars;
    }else{
        console.error("Could not load cars!");
        return {result: "Bad"};
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    search_car: async ({request}) => {
        const d = await request.formData();
        console.log(d)
        const vehicle = new Vehicle(d.get('year'), d.get('make'), d.get('model'), d.get('trim'));
        //console.log(vehicle);
        //console.log(`${JSON.stringify(d, null, 4)}`)
        return {result: "Good"}
        //console.log(`${JSON.stringify(d, null, 4)}`)
    },
    get_cars: async () => {
    const cars = load_csv();
    if (cars){
        return cars;
    }else{
        console.error("Could not load cars!");
        return false;
    }
    }};