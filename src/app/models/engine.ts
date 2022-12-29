export class Engine {
    fuel?: 'petrol' | 'diesel' | 'electric';
    power?: number;
    consumption?: number;

    Engine() {
        this.fuel = 'petrol';
        this.power = undefined;
        this.consumption = undefined;
    }
}