import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars?: Car[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  processForm(car: Car): void{
    
    this.carService.addCar();
  }

}
