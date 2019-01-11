import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { Study1Component } from './study1/study1.component';
import { Study2Component } from './study2/study2.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ExObservableComponent } from './ex-observable/ex-observable.component';
import { Study1n2Component } from './study1n2/study1n2.component';
import { AdultComponent } from './study1n2/adult/adult.component';
import { BabyComponent } from './study1n2/baby/baby.component';
import { Observable1Component } from './observable1/observable1.component';
import { Observable2Component } from './observable2/observable2.component';
import { InMemoryDataService } from './study1/data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { NumCheckDirective } from './observable2/num-check.directive';
import { DirectiveComponent } from './directive/directive.component';
import { Observable3Component } from './observable3/observable3.component';


@NgModule({
  declarations: [
    AppComponent,
    Study1Component,
    Study2Component,
    HomeComponent,
    NavComponent,
    ExObservableComponent,
    Study1n2Component,
    AdultComponent,
    BabyComponent,
    Observable1Component,
    Observable2Component,
    NumCheckDirective,
    DirectiveComponent,
    Observable3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

