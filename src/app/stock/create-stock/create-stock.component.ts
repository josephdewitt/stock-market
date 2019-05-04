import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';


@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent {

  public stock: Stock;
  public confirmed = false;
  public exchanges = ["NYSE", "NASDAQ", "OTHER"];
  constructor() { 
    this.stock = new Stock('', '', 0 , 0,'NASDAQ');
    }
  setStockPrice(price:number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm) {
    console.log("Creating Stock", this.stock);
    if(stockForm.valid) {
      Console.log("Creating Stock" , this.stock);
    } else
  }
}
