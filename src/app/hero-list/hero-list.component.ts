import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(public heroService:HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe((value: Hero[])=>{this.heroes=value},(error:any)=>{},()=>{});
  }

  onSelect(hero: Hero) : void{
    this.selectedHero= hero;
  }

}
