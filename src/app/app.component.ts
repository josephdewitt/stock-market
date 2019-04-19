import { Component, SimpleChanges, OnInit, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnChanges } from '@angular/core';
import { Stock } from './model/stock';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  title = "Joe's stock-market App";

  public stock: Stock;
  private counter: number=1;

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    console.log('app Component - On Init');
  }

  onToggleFavorite(stock: Stock){
    console.log("Farorite for stock", stock, 'was triggered');
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject(){
    //This will update the value in the stock item compent
    // because it is triggered as a result of an event
    // binding from the stock item component.
    this.stock = new Stock('Test Stock Company - ' + this.counter++, "TSC", 85,80);
    }

  changeStockPrice(){
    //This will update the value in the stock item compenent
    //Because we are creating a new reference from the stock input.
    this.stock.price += 10;
      }  
  ngAfterContentChecked(): void {
    console.log('App Component - After Content Checked');
  }
  ngAfterViewChecked(): void {
    console.log('App Component - After View Checked');
  }
  ngAfterContentInit(): void {
    console.log('App Component - After Content Init');
  }
  ngDoCheck(): void {
    console.log('App Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('App Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('App Component - On Content Changes -', changes);
  }
  ngAfterViewInit(): void {
    console.log('App Component - After View Init');
  }
}
