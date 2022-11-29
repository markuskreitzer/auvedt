import type {Actions} from "./$types";
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const year = data.get('year');
        const make = data.get('make');
        console.log(`${year}, ${make}`)
        //const user = await db.getUser(email);
        //cookies.set('sessionid', await db.createSession(user));

        return { success: true };
    }
}