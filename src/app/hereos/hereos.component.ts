import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HEROES} from '../mock-heroes'

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.scss']
})
export class HereosComponent implements OnInit {
  heroes = HEROES;
  hero : Hero ={
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }



  ngOnInit(): void {
  }

  selectedHero: Hero;
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }

}
