import { Component, OnInit } from '@angular/core';
import {Citizen} from "../citizen";

@Component({
  selector: 'app-election-commission',
  templateUrl: './election-commission.component.html',
  styleUrls: ['./election-commission.component.css']
})
export class ElectionCommissionComponent implements OnInit {

  map: Map<String, any>;
  congressVotes:number;
  bjpVotes:number;
  thirdfrontVotes:number;

  citizens: Citizen[]=[{name: 'Karthick'},{name: 'Yogesh'},{name: 'Valli'}]

  constructor() { }

  ngOnInit() {
    this.map=new Map();
    this.map
      .set("congress",this.voteForCongress)
      .set("bjp", this.voteForBJP())
      .set("thirdfront", this.voteForThirdFront());
  }

  voteForCongress= () =>{
    this.congressVotes++
  }

  voteForBJP = ()=>{
    this.bjpVotes++
  }

  voteForThirdFront= ()=>{
    this.thirdfrontVotes++
  }

}
