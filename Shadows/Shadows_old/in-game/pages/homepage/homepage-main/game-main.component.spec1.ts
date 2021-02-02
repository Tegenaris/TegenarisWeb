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
    component.warrior = {
      //Properties
      name: "Testy",
      id: 1,

      //Basic feats
      agility: 10,
      strength: 10,

      //Secondary feats
      vitality: 10,
      attack: 10,
      defense: 10,


      //Eq
      gold: 100,
      jewels: 45,

      bootsType: 1,
      weaponType: 1,
      shieldType: 1,
      glovesType: 1,
      hatType: 1

    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should fetch testy warrior', () => {

  });

  //Todo - make sure to disable the service call
  xit('should render warrior name in a h2 tag', () => {
    const fixture = TestBed.createComponent(GameMainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Mocky');
  });
  it("should tell me the time evaluated", () => {
    let start = window.performance.now();
    console.time("test1");
    for (let j = 0; j < 100000000; j++) {
      let k: number = j - j;
      let f: number = j + j;
      let a: number = j / j;
      let b: number = j * a;
      let g: number = k - f;
    }
    let end1 = window.performance.now();
    for (let j = 0; j < 1000000000; j++) {
      let k: number = j - j;
      let f: number = j + j;
      let a: number = j / j;
      let b: number = j * a;
      let g: number = k - f;
    }
    let end2 = window.performance.now();

    console.timeEnd("test1");
    let end3 = window.performance.now();
    //console.log("Time1:", end1 - start);
    //console.log("Time2:", end2 - start);
    //console.log("Time3:", end3 - start);
  });
});
