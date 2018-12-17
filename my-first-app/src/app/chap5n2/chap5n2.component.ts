import { Component } from '@angular/core';

@Component({
  selector: 'app-chap5n2',
  templateUrl: '/chap5n2.component.html',
  styleUrls: ['/chap5n2.component.css']
})
export class Chap5n2Component {
  speed = 'Slow';
  vehicle = 'Train';
  newSpeed = 'Hypersonic';
  newVehicle = 'Plane';
  upper = function(str: any) {
    str = str.toUpperCase();
    return str;
  }
  lower = function(str: any) {
    return str.toLowerCase();
  }
  setValues = function(speed: any, vehicle: any) {
    this.speed = speed;
    this.vehicle = vehicle;
  }
}
