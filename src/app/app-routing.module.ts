import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimerControlComponent} from "./online-timer/timer-control/timer-control.component";
import {HeroListComponent} from "./hero-list/hero-list.component";
import {AppComponent} from "./app.component";
import {ElectionCommissionComponent} from "./election/election-commission/election-commission.component";

const routes: Routes = [
  {
    path: 'online-timer',
    component: TimerControlComponent,
  },
  {
    path: 'hero-list',
    component: HeroListComponent,
  },{
    path: 'election',
    component: ElectionCommissionComponent,
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
