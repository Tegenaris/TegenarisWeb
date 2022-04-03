import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaveComponent } from './cave/cave.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'cave', component: CaveComponent},
  { path: 'homepage', component: HomePageComponent },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
