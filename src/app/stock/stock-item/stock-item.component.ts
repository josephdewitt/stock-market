import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnChanges } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent  implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit{

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;
  
  constructor() { 
    this.toggleFavorite = new EventEmitter<Stock>();
  }  
   onToggleFavorite(event) {
       this.toggleFavorite.emit(this.stock);
  }
  changeStockPrice(){
    this.stock.price +=5 ;
  }
  ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked');
  }
  ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked');
  }
  ngAfterContentInit(): void {
    console.log('Stock Component - After Content Init');
  }
  ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Content Changes -', changes);
  }
  ngAfterViewInit(): void {
    console.log('Stock Item Component - After View Init');
  }
  ngOnInit(): void {
    console.log('Stock Item Component - on Init');
  }  
}
