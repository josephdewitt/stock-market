import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Joe's stock-market App";

  public stock: Stock;

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80,'OTHER');
    }

  onToggleFavorite(stock: Stock){
    this.stock.favorite = !this.stock.favorite;
  }
}
