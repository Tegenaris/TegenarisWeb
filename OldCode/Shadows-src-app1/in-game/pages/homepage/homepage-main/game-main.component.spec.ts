import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameMainComponent } from './game-main.component';
import { HeaderMenuComponent } from '../../../../in-game/components/header/header-menu/header-menu.component';
import { FooterMainComponent } from '../../../../in-game/components/footer/footer-main/footer-main.component';
import { RouterTestingModule } from '@angular/router/testing';
// import { ActivatedRoute } from '@angular/router';
// import { of } from 'rxjs';

describe('GameMainComponent', () => {
  let component: GameMainComponent;
  let fixture: ComponentFixture<GameMainComponent>;
  //const route: any = { data: of({ id: '3' }) };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        GameMainComponent,
        HeaderMenuComponent,
        FooterMainComponent
      ],
      //  providers: [{ provide: ActivatedRoute, useValue: route }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMainComponent);
    component = fixture.componentInstance;
    //Define the initial warrior value
    component.warrior = { name: "Testy", gold: 100, diamonds: 45, agility: 10, attack: 10, defense: 10, id: 1, strength: 10, vitality: 10 }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should fetch testy warrior', ()=>{

  });
});
