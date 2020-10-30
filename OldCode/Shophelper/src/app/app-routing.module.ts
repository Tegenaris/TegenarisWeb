import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Routes
import { ChartMainComponent } from './chart/chart-main/chart-main.component';

const routes: Routes = [
  { path: 'chart', component: ChartMainComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
