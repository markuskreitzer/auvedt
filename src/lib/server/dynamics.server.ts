
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

interface RouteData {
    x: Array<number>;
    y: Array<number>;
    z: Array<number>;
    t: Array<number>;
}

export default class DriveRoute {
    x: Array<number>;
    y: Array<number>;
    z: Array<number>;
    t: Array<number>;

    constructor(route_data: RouteData) {
        this.x = route_data.x
        this.y = route_data.y
        this.z = route_data.z
        this.t = route_data.t
    }
}