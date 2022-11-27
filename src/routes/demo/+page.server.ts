import type {PageServerLoad} from "./$types";
import type {Actions} from "./$types";
import {Vehicle} from "../vehicle/vehicle.server";

/** @type {import('./$types').Actions} */
export const actions = {
    demo: async ({request}) => {
        const d = await request.formData();
        const vehicle = new Vehicle(
            d.get('year'),
            d.get('make'),
            d.get('model'),
            d.get('trim'));
        console.log(vehicle);
        console.log(`${JSON.stringify(d, null, 4)}`)
    }
};