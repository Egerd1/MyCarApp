import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

model: any = {}

  constructor() {}

  ngOnInit(): void {}

  login(){
    console.log(this.model);

  }
}
