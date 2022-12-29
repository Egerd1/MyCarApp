import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars?: Car[];
  private http?: HttpClientModule;

  constructor() {
    this.cars = this.cars;
   }

  getCars(){
return this.cars;
  }

  addCar() {
    

  }

  deleteCar(){

  }

  updateCar(){

  }
}
