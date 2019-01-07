import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Study1Component } from '../study1/study1.component';
import { HomeComponent } from '../home/home.component';
import { ExObservableComponent } from '../ex-observable/ex-observable.component';
import { Study1n2Component } from '../study1n2/study1n2.component';
import { Observable1Component } from '../observable1/observable1.component';
import { Observable2Component } from '../observable2/observable2.component';

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
    path: 'observable1',
    component: Observable1Component
  },
  {
    path: 'observable2',
    component: Observable2Component
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
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
