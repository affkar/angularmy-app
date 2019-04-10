import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  public timer: number
  private intervalId: number;
  private message: string;
  public isStarted: boolean;

  constructor() { }

  ngOnInit() {
    this.timer=15;
  }

  public clearTimer():void{
    clearInterval(this.intervalId);
  }

  public start():void{
    if(!this.isStarted) {
      this.intervalId = window.setInterval(() => {
        this.timer = this.timer - 1;
        if (this.timer == 0) {
          this.message = "Blast off!!"
          this.clearTimer();
        } else if (this.timer > 0 && this.timer != 15) {
          this.message = `${this.timer} seconds and counting!`
        }
      }, 1000);
      this.isStarted = true;
    }

  }

  public reset():void{
    this.clearTimer();
    this.timer=15;
    this.message ="";
    this.isStarted=false;
  }

  public stop():void{
    if(this.isStarted) {
      this.clearTimer();
      this.message = `pausing at ${this.timer} seconds before blastoff`
      this.isStarted=false;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

}
