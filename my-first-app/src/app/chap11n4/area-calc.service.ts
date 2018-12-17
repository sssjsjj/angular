import { Injectable } from '@angular/core';
//서비스를 외부에서 사용할 수 있도록 injectable을 임포트!
@Injectable()
export class AreaCalcService {
  circle(radius:number): number {
    return Math.PI * radius * radius
  }
  square(base:number): number {
    return base * base
  }
  rectangle(base:number, height): number{
    return base * height;
  }
  triangle(base:number, height): number{
    return (base*height)/2;
  }
  trapezoid(base1: number, base2: number, height: number): number{
    return ((base1+base2)/2) * height;
  }
  constructor() { }
}

