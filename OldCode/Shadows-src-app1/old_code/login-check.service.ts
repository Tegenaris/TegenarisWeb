// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Warriors } from './mockWarrior';
// import { Warrior } from './warrior';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginCheckService {
  
//   public warrior: Warrior;
  
//   private warriorData = new BehaviorSubject<Warrior>(this.warrior);
//   currentWarriorData = this.warriorData.asObservable();

//   constructor() {}

//   setWarriorData(warriorId: number) {
//     Warriors.forEach((element: Warrior) => {
//       if (element.id === warriorId) {
//         this.warrior = element;
//       }
//       this.warriorData.next(this.warrior);
//     })
//   }
// }
