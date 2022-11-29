import * as dotenv from 'dotenv'
import * as process from "process";
import * as lodash from "lodash";
import csv from "csvtojson";
import type {Converter} from "csvtojson/v2/Converter";
dotenv.config()

export async function load_csv() { //file_path: string) {
    const file_path = String(process.env.CSV_FILEPATH);
    return csv().fromFile(file_path);
}
export function parse_csv(rows: string | any[]){
    const final_rows = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const veh = Object.entries(row);
        const [year, make, model, trim, cd, cda, power, torque, mass, ...rest] = veh
        if (RegExp('\\d+\\s*-\\s*\\d+').test(String(year[1]))) {
            const years = String(year[1]).split(RegExp('\\s*-\\s*'));
            lodash.range(Number(years[0]), Number(years[1]) + 1).forEach(
                (year: number) => {
                    final_rows.push({year: year, make: String(make[1]), model: String(model[1]), trim: String(trim[1]), cd: Number(cd[1]), cda: cda[1], power: power[1], torque: torque[1], mass: mass[1]});
                }
            )
        } else {
            //console.log(`Normal ${year}`)
            final_rows.push({year: Number(year[1]), make: String(make[1]), model: model[1], trim: trim[1], cd: cd[1], cda: cda[1], power: power[1], torque: torque[1], mass: mass[1]});
        }
    }
    //console.log(`Returning rows: ${rows}`);
    return final_rows;
}
