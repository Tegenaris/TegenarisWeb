//Angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Angular elements
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// //Game components
import { GameMainComponent } from './in-game/pages/homepage/homepage-main/game-main.component';
import { HeaderMenuComponent } from './in-game/components/header/header-menu/header-menu.component';
import { FooterMainComponent } from './in-game/components/footer/footer-main/footer-main.component';
import { EquipmentComponent } from './in-game/pages/equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent, GameMainComponent, HeaderMenuComponent, FooterMainComponent, EquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
