import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Goblin } from './goblin';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.scss']
})
export class CaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hero = new Hero;
  goblin = new Goblin;
  public exploreCave() {
    if (this.hero.strength > this.goblin.strength) {
      console.log("won!");
    }
    else {
      console.log("lost");
    }
  }

}
