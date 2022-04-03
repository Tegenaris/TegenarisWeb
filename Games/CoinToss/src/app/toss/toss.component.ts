import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toss',
  templateUrl: './toss.component.html',
  styleUrls: ['./toss.component.scss']
})
export class TossComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }

  public result = "Waiting...";
  public runAnimation: boolean = false;
  public image = "coin.png";

  public toss(){
    this.runAnimation = true;
    this.result = "Tossing...";
    this.image = "coin.png";
    
    let animated = document.querySelector('#coin-main');
    animated?.addEventListener('animationend', () => {
      this.runAnimation = false;
      let i = Math.round(Math.random());
      switch (i){
        case 0:
          this.result = "It's heads!";
          this.image = "heads.png";
          break;
        case 1: 
          this.result = "It's tails!";
          this.image = "tails.png";
          break;
        default:
          this.result = "Something happened, lol"
          break;
      }
      //console.log(animated?.);
    });
  };
}