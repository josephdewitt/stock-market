
import { async, TestBed } from '@angular/core/testing';

import { StockItemComponent } from './stock-item.component';
import { Stock} from '../../model/stock';
import { By} from '@angular/platform-browser';


describe('Stock Item Component', () => {
  let component, fixture;
  //: StockItemComponent;
  //let fixture: ComponentFixture<StockItemComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    component.stock = new Stock( 'Testing Stock', 'TS', 100, 200);
    fixture.detectChanges();
  });

  it('should create stock compenent and render stock data', () => {
    const nameEL = fixture.debugElement.query(By.css('.name'));
    expect(nameEL.nativeElement.textContent).toEqual('Testing Stock (TS)');
    const priceEL = fixture.debugElement.query(By.css('.price.negative'));
    expect(priceEL.nativeElement.textContent).toEqual('$ 100');
    const addtoFavoriteBtnEL = fixture.debugElement.query(By.css('button'));
    expect(addtoFavoriteBtnEL).toBeDefined();
  });
  it('should trigger event emitter on add to favorites', () => {
    let selectedStock: Stock;
    component.toggleFavorite.subscribe((stock: Stock) =>  selectedStock = stock);
    const addtoFavoriteBtnEL = fixture.debugElement.query(By.css('button'));

    expect(selectedStock).toBeUndefined();
    addtoFavoriteBtnEL.triggerEventHandler('click', null);
    expect(selectedStock).toEqual(component.stock);
  });
});
