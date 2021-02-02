import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/main/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chart-main',
  templateUrl: './chart-main.component.html',
  styleUrls: ['./chart-main.component.sass']
})
export class ChartMainComponent implements OnInit {

  constructor() { }
  //constructor(private categoryService: CategoryService) { }
  //categories: Category[];
  item: Item;
  totalPrice: number = 0;
  savedElements: Item[];

  ngOnInit() {
    this.item = { price: 0, amount: 0, name: "" };
    this.savedElements = [];
    //let categoriesResponse = this.categoryService.getCategories();
  }

  calculateTotalPrice = function (savedElements) {
    var totalPrice = 0;
    savedElements.forEach(element => {
      totalPrice += element.price * element.amount;
    });
    return totalPrice;
  }

  add = function (item: Item) {
    //Rewrite the item properties to unbind it from 2-way data-binding
    let currentItem = { amount: item.amount, price: item.price, name: item.name };
    let duplicateFound: boolean = false;
    for (var i = 0; i < this.savedElements.length; i++) {
      if (this.savedElements[i].name === currentItem.name) {
        duplicateFound = true;
      }
      else {
        duplicateFound = false;
      }
    }
    if (!duplicateFound) {
      this.savedElements.push(currentItem);
    }
    this.totalPrice = this.calculateTotalPrice(this.savedElements);
  }

  remove = function (itemR: Item) {
    var position = this.savedElements.findIndex(x => x.name == itemR.name);
    this.savedElements.splice(position, 1);
  }
}
