import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {
  public name: string;
  public code: String;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;


  constructor() { }

  ngOnInit() {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
    this.favorite = false;
  }

  toggleFavorite(){
    console.log("we are toggling the favorite state for the stock");
    this.favorite != this.favorite;
  }
}
