import { Engine } from "./engine";

export class Car {
    id?: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    km: number;
    engine: Engine;

    constructor(brand: string, model: string, year: number, price: number,  km: number, engine: Engine){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.km = km;
        this.engine = new Engine();
    }

}
