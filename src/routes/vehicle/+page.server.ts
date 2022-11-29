import type {PageServerLoad,Actions} from "./$types";
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
