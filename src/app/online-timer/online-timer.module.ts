import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    TimerControlComponent,
    TimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimerControlComponent
  ]
})
export class OnlineTimerModule { }
