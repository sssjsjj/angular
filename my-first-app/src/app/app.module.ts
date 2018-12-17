import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { Chap5n1Component } from './chap5n1/chap5n1.component';
import { Chap5n2Component } from './chap5n2/chap5n2.component';
import { Chap5n3Component } from './chap5n3/chap5n3.component';
import { Chap5n4Component } from './chap5n4/chap5n4.component';
import { CensorPipe } from './censor.pipe';
import { Chap6n1Component } from './chap6n1/chap6n1.component';
import { Chap6n2Component } from './chap6n2/chap6n2.component';
import { Chap6n3Component } from './chap6n3/chap6n3.component';
import { Chap6n4Component } from './chap6n4/chap6n4.component';
import { Chap6n5Component } from './chap6n5/chap6n5.component';
import { Chap7n1Component } from './chap7n1/chap7n1.component';
import { Chap6n6Component } from './chap6n6/chap6n6.component';
import { Chap7n2Component } from './chap7n2/chap7n2.component';
import { Chap8n1Component } from './chap8n1/chap8n1.component';
import { Chap8n2Directive } from './chap8n2.directive';
import { Chap8n5Component } from './chap8n5/chap8n5.component';
import { Chapt8n5subComponent } from './chapt8n5sub/chapt8n5sub.component';
import { Chap9n1Component } from './chap9n1/chap9n1.component';
import { Chap9n1subComponent } from './chap9n1sub/chap9n1sub.component';
import { Chap9n4Component } from './chap9n4/chap9n4.component';
import { Chap9n4subComponent } from './chap9n4sub/chap9n4sub.component';
import { Chap9n10Component } from './chap9n10/chap9n10.component';
import { Chap10n1Component } from './chap10n1/chap10n1.component';
import { Chap10n7Component } from './chap10n7/chap10n7.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './chap10n7/service/chap10n7.service';
import { dataName } from './chap10n12/data.service';
import { Chap10n12Component } from './chap10n12/chap10n12.component';
import { Ch10Component } from './ch10/ch10.component';
import { Route2Component } from './route2/route2.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavComponent } from './nav/nav.component';
import { Chap11n2Component } from './chap11n2/chap11n2.component';
import { Chap11n4Component } from './chap11n4/chap11n4.component';
import { Chap11n8Component } from './chap11n8/chap11n8.component';
import { TabsComponent } from './nav/tabs/tabs.component';
import { TabComponent } from './nav/tab/tab.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    Chap5n1Component,
    Chap5n2Component,
    Chap5n3Component,
    Chap5n4Component,
    CensorPipe,
    Chap6n1Component,
    Chap6n2Component,
    Chap6n3Component,
    Chap6n4Component,
    Chap6n5Component,
    Chap7n1Component,
    Chap6n6Component,
    Chap7n2Component,
    Chap8n1Component,
    Chap8n2Directive,
    Chap8n5Component,
    Chapt8n5subComponent,
    Chap9n1Component,
    Chap9n1subComponent,
    Chap9n4Component,
    Chap9n4subComponent,
    Chap9n10Component,
    Chap10n1Component,
    Chap10n7Component,
    Chap10n12Component,
    Ch10Component,
    Route2Component,
    HomeComponent,
    AppRoutingComponent,
    NavComponent,
    Chap11n2Component,
    Chap11n4Component,
    Chap11n8Component,
    TabsComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    InMemoryWebApiModule.forRoot(dataName),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
