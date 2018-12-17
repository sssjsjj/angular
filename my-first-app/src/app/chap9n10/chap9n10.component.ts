import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chap9n10',
  templateUrl: './chap9n10.component.html',
  styleUrls: ['./chap9n10.component.css']
})
export class Chap9n10Component implements OnInit {
  combinedTotal: number = 0;
  private pass: Observable<any>
  private run: Observable<any>;
  teams = [];
  ngOnInit(){
    this.teams.push({passing:0, running:0, total:0});
    this.teams.push({passing:0, running:0, total:0});
    //Passing
    this.pass = new Observable(observer => {
      this.playLoop(observer);
    });
    this.pass.subscribe(
      data => {
        this.teams[data.team].passing += data.yards;
        this.addTotal(data.team, data.yards);
      });
      //Running
      this.run = new Observable(observer => {
        this.playLoop(observer);
      });
      this.run.subscribe(
        data => {
          this.teams[data.team].running += data.yards;
          this.addTotal(data.team, data.yards);
        });
     //Combined
     this.pass.subscribe(
       data => { this.combinedTotal += data.yards 
      });
     this.run.subscribe(
       data => {this.combinedTotal =+ data.yards;}
     );    
  };
  playLoop(observer){
    var time = this.getRandom(500, 2000);
    setTimeout( () => {
      observer.next(
        {team: this.getRandom(0,2),
        yards: this.getRandom(0,30)}
      );
      if(this.combinedTotal < 1000){
        this.playLoop(observer);
      }
    }, time);
  }
  addTotal(team, yards){
    this.teams[team].total += yards;
  }
  getRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
  }


  constructor() { }
}
