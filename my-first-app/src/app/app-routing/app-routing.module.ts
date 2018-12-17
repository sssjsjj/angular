import { NgModule } from '@angular/core';
import { Route2Component } from '../route2/route2.component';
import { HomeComponent } from '../home/home.component';
import { NavComponent } from '../nav/nav.component';
import { Routes, RouterModule} from '@angular/router';
import { Chap5n1Component } from '../chap5n1/chap5n1.component';
import { Chap5n2Component } from '../chap5n2/chap5n2.component';
import { Chap5n3Component } from '../chap5n3/chap5n3.component';
import { Chap5n4Component } from '../chap5n4/chap5n4.component';
import { Chap6n1Component } from '../chap6n1/chap6n1.component';
import { Chap6n2Component } from '../chap6n2/chap6n2.component';
import { Chap6n3Component } from '../chap6n3/chap6n3.component';
import { Chap6n4Component } from '../chap6n4/chap6n4.component';
import { Chap6n5Component } from '../chap6n5/chap6n5.component';
import { Chap7n1Component } from '../chap7n1/chap7n1.component';
import { Chap7n2Component } from '../chap7n2/chap7n2.component';
import { Chap8n1Component } from '../chap8n1/chap8n1.component';
import { Chap8n5Component } from '../chap8n5/chap8n5.component';
import { Chap9n1Component } from '../chap9n1/chap9n1.component';
import { Chap9n4Component } from '../chap9n4/chap9n4.component';
import { Chap9n10Component } from '../chap9n10/chap9n10.component';
import { Chap10n1Component } from '../chap10n1/chap10n1.component';
import { Chap10n7Component } from '../chap10n7/chap10n7.component';
import { Chap10n12Component } from '../chap10n12/chap10n12.component';
import { Chap11n2Component } from '../chap11n2/chap11n2.component';
import { Chap11n4Component } from '../chap11n4/chap11n4.component';
import { Chap11n8Component } from '../chap11n8/chap11n8.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'route2/:params',
    component: Route2Component
  },
  {
    path: 'chap5n1',
    component: Chap5n1Component
  },
  {
    path: 'chap5n2',
    component: Chap5n2Component
  },
  {
    path: 'chap5n3',
    component: Chap5n3Component
  },
  {
    path: 'chap5n4',
    component: Chap5n4Component
  },
  {
    path: 'chap6n1',
    component: Chap6n1Component
  },
  {
    path: 'chap6n2',
    component: Chap6n2Component
  },
  {
    path: 'chap6n3',
    component: Chap6n3Component
  },
  {
    path: 'chap6n4',
    component: Chap6n4Component
  },
  {
    path: 'chap6n5',
    component: Chap6n5Component
  },
  {
    path: 'chap7n1',
    component: Chap7n1Component
  },
  {
    path: 'chap7n2',
    component: Chap7n2Component
  },
  {
    path: 'chap8n1',
    component: Chap8n1Component
  },
  {
    path: 'chap8n5',
    component: Chap8n5Component
  },
  {
    path: 'chap9n1',
    component: Chap9n1Component
  },
  {
    path: 'chap9n4',
    component: Chap9n4Component
  },
  {
    path: 'chap9n10',
    component: Chap9n10Component
  },
  {
    path: 'chap9n1',
    component: Chap9n1Component
  },
  {
    path: 'chap9n4',
    component: Chap9n4Component
  },
  {
    path: 'chap10n1',
    component: Chap10n1Component
  },
  {
    path: 'chap10n7',
    component: Chap10n7Component
  },
  {
    path: 'chap10n12',
    component: Chap10n12Component
  },
  {
    path: 'chap11n2',
    component: Chap11n2Component
  },
  {
    path: 'chap11n4',
    component: Chap11n4Component
  },
  {
    path: 'chap11n8',
    component: Chap11n8Component
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
