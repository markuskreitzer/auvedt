import fs from 'fs';


class Vehicle {
    year: number;
    make: string;
    model: string;
    trim?: string;
    cd?: number;
    cda?: number;
    power?: number;
    torque?: number;
    mass?: number;

    constructor(year: number, make: string, model: string, trim: string, cd: number, cda: number,power: number, torque: number,  mass: number) {
    //constructor(year: string, make: string, model: string, trim: string) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.trim = trim;
        this.cd = cd;
        this.cda = cda;
        this.mass = mass;
        this.power = power
    }
}

export {Vehicle};
