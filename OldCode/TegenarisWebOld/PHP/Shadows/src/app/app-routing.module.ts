import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameMainComponent } from './in-game/pages/homepage/homepage-main/game-main.component';
//import { UserStatsComponent } from './game/userPage/user-stats/user-stats.component';
//import { JourneyMainComponent } from './game/journey/journey-main/journey-main.component';
//import { NotLoggedInMainComponent } from './notLoggedIn/not-logged-in-main/not-logged-in-main.component';

const routes: Routes = [
//  { path: 'login', component: NotLoggedInMainComponent },
//  { path: 'statistics', component: UserStatsComponent },
//  { path: 'journey', component: JourneyMainComponent },
  { path: 'game', component: GameMainComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' }
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
