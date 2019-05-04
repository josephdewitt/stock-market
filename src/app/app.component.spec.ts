import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {StockItemComponent} from '../app/stock/stock-item/stock-item.component';
import { Stock } from './model/stock';

import { By} from '@angular/platform-browser';


describe('AppComponent', () => {

  describe('Simple, No Angualr Unit Test', () => {
    it('should have stock instantiated on ngInit', () => {
      const appComponent = new AppComponent();
      expect(appComponent.stock).toBeUndefined();
      appComponent.ngOnInit();
      expect(appComponent.stock).toEqual(new Stock('Test Stock Company', 'TSC', 85, 80));
    });
    
    it("should have toggle stock favorite", () => {
      const appComponent = new AppComponent();
      appComponent.ngOnInit();
      expect(appComponent.stock.favorite).toBeFalsy();
      appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
      expect(appComponent.stock.favorite).toBeTruthy();
      appComponent.onToggleFavorite(new Stock('Test', 'TEST', 54, 55));
      expect(appComponent.stock.favorite).toBeFalsy();
    });
  });
  
  describe('Angular-aware test', () => {

    let component, fixture;
      
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ AppComponent, StockItemComponent, ],
      }).compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should load stock with default values', () => {
      const titleEL = fixture.debugElement.query(By.css('h1'));
      // trim to avoid HTML whitspaces
      console.log(titleEL.textContent);
      expect(titleEL.nativeElement.textContent.trim()).toEqual("Welcome to Joe's stock-market App!");
    
      //check for default stock values in template
      const nameEL = fixture.debugElement.query(By.css('.name'));
      expect(nameEL.nativeElement.textContent).toEqual('Test Stock Company (TSC)');
  
      const priceEL = fixture.debugElement.query(By.css('.price.positive'));
      expect(priceEL.nativeElement.textContent).toEqual('$ 85');
      
      const addtoFavoriteBtnEL = fixture.debugElement.query(By.css('button'));
      expect(addtoFavoriteBtnEL).toBeDefined();
    });
    
    it('should toggle stock favorite correctly', () => {
      expect(component.stock.favorite).toBeFalsy();

      let addtoFavoriteBtnEL = fixture.debugElement.query(By.css('button'));
      expect(addtoFavoriteBtnEL).toBeDefined();
      addtoFavoriteBtnEL.triggerEventHandler('click', null);

      fixture.detectChanges();

      expect(component.stock.favorite).toBeTruthy();
      
      addtoFavoriteBtnEL = fixture.debugElement.query(By.css('button'));
      expect(addtoFavoriteBtnEL).toBeNull();
    });
    
  });
  
}); 