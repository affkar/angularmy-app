import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectionCommissionComponent } from './election-commission/election-commission.component';
import { VoterComponent } from './voter/voter.component';

@NgModule({
  declarations: [ElectionCommissionComponent, VoterComponent],
  imports: [
    CommonModule
  ]
})
export class ElectionModule { }
