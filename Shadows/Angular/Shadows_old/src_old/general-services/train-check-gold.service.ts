import { Injectable } from '@angular/core';
import { Warrior } from './warrior';

@Injectable({
  providedIn: 'root'
})
export class TrainCheckGoldService {

  constructor() { }

  checkGold(warrior: Warrior, currentLevel) {
    let neededGold = currentLevel * (currentLevel - 1);
    return (warrior.gold > neededGold ? true: false);
  }
}
