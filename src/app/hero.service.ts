import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mockheroes";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[]=HEROES;

  constructor() { }

  public createDuplicate(heroToCopy: Hero): Hero{
    let hero = new Hero();
    hero.name=heroToCopy.name;
    hero.no=this.heroes.length+1;
    hero.city=heroToCopy.city;
    return hero;
  }

  public addHero(hero:Hero): void{
    this.heroes.push(hero);
  }

  public createDuplicateAndAddHero(hero:Hero): void{
    this.addHero(this.createDuplicate(hero));
    this.printHeroes();
  }

  public getHeroes(): Observable<Hero[]>{
    return of(this.heroes);
  }


  private printHeroes() {
    for (var i = 0;i<this.heroes.length;i++){
      console.log(this.heroes[i].no);
    }
  }
}
