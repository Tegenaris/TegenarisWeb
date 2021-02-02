// import { Component, OnInit, Input } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Rampager } from '../../rampager';
// import { Rampagers } from '../../mockRampagers'
// //import { LoginCheckService } from 'src/app/generalServices/login-check.service';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'app-login-main',
//   templateUrl: './login-main.component.html',
//   styleUrls: ['./login-main.component.scss']
// })
// export class LoginMainComponent implements OnInit {

//   rampager: Rampager = { id: 0, login: "", password: "" };
//   rampagers = Rampagers;
//   flag: boolean = false;

//   constructor(
//     // private loginCheckService: LoginCheckService,
//     // private router: Router
//     ) { }

//   ngOnInit() {
//   }

//   //Handle enter key here
//   // onKeydown(event) {
//   //   console.log(event);
//   // }

//   login = function (rampager: Rampager) {
//     this.flag = false;
//     this.rampagers.forEach((k: Rampager) => {
//       if (k.login === rampager.login && k.password === rampager.password) {
//         this.loginCheckService.setWarriorData(k.id);
//         this.router.navigate(['/game']);
//       }
//     })
//   }
// }
