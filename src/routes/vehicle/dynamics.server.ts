import type {Vehicle} from "./vehicle.server";
import * as math from "mathjs";

function kw2hp(kw:number){
    const hp = 1.35962; //kw
    return kw*hp;
}
function hp2kw(hp: number){
    const kw = 0.7354996249; // hp
    return hp*kw;
}

function nm2lbft(nm: number){
    const lbft = 0.73756214927727;
    return nm * lbft;
}

function lbft2nm(lbft: number){
    const nm = 1.3558179483314;
    return lbft * nm;
}
function generate_plot_data(vehicle: Vehicle, drive_route: DriveRoute){
    const cdA = vehicle.cda
    const t = [1,3,4,5,6]
    const y = math.multiply(cdA, drive_route.t)
    return [t,y]
}

export const vehicles: (string | number)[][] = [
    ['2001', 'Ford', 'Focus', 0.34, 1.333 ]
]

interface RouteData {
    x: Array<number>;
    y: Array<number> | undefined;
    z: Array<number> | undefined;
    t: Array<number>;
}

export default class DriveRoute {
    x: Array<number>;
    y: Array<number> | undefined;
    z: Array<number> | undefined;
    t: Array<number>;

    constructor(route_data: RouteData) {
        this.x = route_data.x
        this.y = route_data.y
        this.z = route_data.z
        this.t = route_data.t
    }
}