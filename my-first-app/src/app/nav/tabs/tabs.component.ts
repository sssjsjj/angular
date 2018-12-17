import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import {TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // contentChildren are set
  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.

    //get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
  }
  // tabs = [
  //   {'title': 'ch 5'},
  //   {'title': 'ch 6'},
  //   {'title': 'ch 7'},
  //   {'title': 'ch 8'},
  //   {'title': 'ch 9'},
  //   {'title': 'ch 10'},
  //   {'title': 'ch 11'},
  // ];
  selectTab(tab) {
    //deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    tab.active = true;
  }

  defaultTab() {
    this.tabs.toArray().forEach(tab => tab.active = false);
  }

  constructor() { }

  ngOnInit() {
  }

}
