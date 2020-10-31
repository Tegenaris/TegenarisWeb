import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockWarrior } from './mockWarrior';
import { Warrior } from './warrior';

@Injectable({
  providedIn: 'root'
})
export class FetchWarriorProfileService {

  public mockWarriorDetails: Warrior;
  private warriorData = new BehaviorSubject<Warrior>(this.mockWarriorDetails);
  currentWarriorData = this.warriorData.asObservable();

  constructor() { }

  getWarriorData() {
    this.warriorData.next(mockWarrior);
  }
}