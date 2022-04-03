import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.scss']
})
export class CaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public exploreCave(){
    alert("Explored");
  }

}
