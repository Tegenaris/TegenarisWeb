import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Main app components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Widgets
import { ChartMainComponent } from './chart/chart-main/chart-main.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
