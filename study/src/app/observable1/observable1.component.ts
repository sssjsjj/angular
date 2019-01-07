import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit , OnDestroy{
  combinedTotal:number = 0;
  private pass$: Observable<any>;
  private run$: Observable<any>;
  teams = [
    {
      passing:0,
      running:0,
      total:0
    }
  ];
  runSubs: Subscription;

  ngOnInit() {
    //passing
    this.pass$ = new Observable(observer => {
      this.playLoop(observer);
    });
    this.pass$.subscribe(
      data => {
        this.teams[0].passing += data.yards;
        this.addTotal(data.yards);
      }
    );

    // running
    this.run$ = new Observable(observer => {
      this.playLoop(observer);
    });
    this.runSubs = this.run$.subscribe(
      data => {
        this.teams[0].running += data.yards;
        this.addTotal(data.yards);
      }
    );

    // combined total
    this.pass$.subscribe(
      data => {
        this.combinedTotal += data.yards;
      }
    );
    this.run$.subscribe(
      data => {
        this.combinedTotal += data.yards;
      }
    );
  }

  ngOnDestroy(): void {
    this.runSubs.unsubscribe();
  }

playLoop(observer) {
  const time = this.getRandom(500, 2000);
  setTimeout(() => {
    observer.next(
      {
        // team: this.getRandom(0,2),
        yards: this.getRandom(0, 20)
      });
    if(this.combinedTotal < 1000) {
      this.playLoop(observer)
    }
  }, time);
}

addTotal(yards){
  this.teams[0].total += yards;
}

getRandom(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

}
