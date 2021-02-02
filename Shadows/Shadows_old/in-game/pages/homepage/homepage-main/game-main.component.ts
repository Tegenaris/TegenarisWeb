import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warrior } from 'src/app/general-services/warrior';
import { FetchWarriorProfileService } from 'src/app/general-services/fetch-warrior-profile.service';
//import { LoginCheckService } from 'src/app/general-services/login-check.service';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss']
})
export class GameMainComponent implements OnInit {

  constructor(
    private fetchWarriorProfileService: FetchWarriorProfileService,
    //private loginCheckService: LoginCheckService,
    // private router: Router
  ) { }

  // logInCheck: number;

  //TODO - fetch the warrior from the service
  warrior: Warrior;

  ngOnInit() {
    
    //Run a function to ask for warrior data
    this.fetchWarriorProfileService.getWarriorData();

    //Receive the warrior data from the above call
    this.fetchWarriorProfileService.currentWarriorData.subscribe(warriorReturn => this.warrior = warriorReturn);






    //----Old code for login functionality
    // this.loginCheckService.currentWarriorData.subscribe(warriorReturn => this.warrior = warriorReturn);
    // //Rampager is not logged in - redirect to login page
    // if (!this.warrior) {/*this.router.navigate(['/login']);*/}
    // //Rampager is logged in. Let's fetch his warrior profile
    // else {/*console.log(this.warrior);*/}
    //console.log(this.fetchWarriorProfileService.getWarriorData());
  }
}
