
interface VehicleConfig {
    make: string;
    model: string;
    year: string;
    cd: number;
    cda: number;
    mass: number;
    power: number;
}

class Vehicle {
    make: string;
    model: string;
    year: string;
    cd: number;
    cda: number;
    mass: number;
    power: number;

    constructor(year: string, make: string, model: string, trim: any) {
        this.year = year
        this.make = make
        this.model = model
        // this.cd = config.cd;
        // this.cda = config.cda;
        // this.mass = config.mass;
        // this.power = config.power;
    }
}

export { Vehicle}