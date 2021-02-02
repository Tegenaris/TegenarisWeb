// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';

// import { LoginMainComponent } from './login-main.component';
// import { Rampager } from '../../rampager';
// import { Router } from '@angular/router';

// describe('LoginMainComponent', () => {
//   let component: LoginMainComponent;
//   let fixture: ComponentFixture<LoginMainComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [FormsModule, Router],
//       declarations: [LoginMainComponent]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginMainComponent);
//     component = fixture.componentInstance;

//     //Define the otherwise undefined rampager object
//     let testData: Rampager = { id: 5, login: 'Testy', password: 'TestyPass' }
//     component.rampager = testData;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should allow the user to log in', () => {
//     component.login(component.rampager)
//     expect(component.flag).toBeTruthy();
//   })
// });
