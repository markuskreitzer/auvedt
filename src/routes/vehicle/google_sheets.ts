import * as dotenv from 'dotenv'
import {google} from "googleapis";


//import {Request, Response} from "express";
//import express from "express";

//const app = express();

dotenv.config()

//app.set("view engine", "ejs")

// app.post("/", async (req: Request, res: Response) => {
//     const { request, name }  = req.body;
// })


const auth = new google.auth.GoogleAuth({
    keyFile: "../../../keys.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const authClientObject = auth.getClient();

async function get_sheet_data(auth_object: any, sheet_name: string) {
    const sheets = google.sheets({version: "v4", auth: auth_object});
    const spreadsheetId = process.env.SPREADSHEET_ID
    console.log(`Spreadsheet ID: ${spreadsheetId}`);

    //Read front the spreadsheet
    const readData = await sheets.spreadsheets.values.get({
        auth, //auth object
        spreadsheetId, // spreadsheet id
        range: `drag_coefficients!A2:D6`, //range of cells to read from.
        //=drag_coefficients!A2:D6
    })

    //send the data read with the response
    console.log(readData.data.values)
}

// get_sheet_data(authClientObject, "drag_coefficients").catch(console.error);