import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {OnlineTimerModule} from "./online-timer/online-timer.module";
import {TimerControlComponent} from "./online-timer/timer-control/timer-control.component";
import {TimerComponent} from "./online-timer/timer/timer.component";
import {ElectionModule} from "./election/election.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OnlineTimerModule,
    ElectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
