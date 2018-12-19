import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Study1Component } from '../study1/study1.component';
import { Study2Component } from '../study2/study2.component';
import { HomeComponent } from '../home/home.component';
import { ExObservableComponent } from '../ex-observable/ex-observable.component';
import { Study1n2Component } from '../study1n2/study1n2.component';
const routes: Routes = [
  {
    path: 'study1-1',
    redirectTo: '/study1',
    pathMatch: 'full'
  },
  {
    path: 'study1',
    component: Study1Component,
  },
  {
    path: 'ex-observable',
    component: ExObservableComponent,
  },
  {
    path: 'study1n2',
    component: Study1n2Component,
  },
  {
    path: 'study2',
    component: Study2Component
  },
  {
    path: '',
    component: HomeComponent
  },
]; 
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
