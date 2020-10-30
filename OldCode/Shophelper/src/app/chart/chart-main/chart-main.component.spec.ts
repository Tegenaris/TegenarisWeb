import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

//Imported components
import { ChartMainComponent } from './chart-main.component';
import { Item } from 'src/app/main/item';

describe('ChartMainComponent', () => {
  let sut: ChartMainComponent;
  let fixture: ComponentFixture<ChartMainComponent>;
  let item1: Item;
  let item2: Item;
  let item3: Item;
  let item4: Item;
  let item5: Item;
  let savedElements: Item[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ChartMainComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMainComponent);
    fixture.detectChanges();
    item1 = { price: 210, amount: 1, name: 'testy1' };
    item2 = { price: 220, amount: 2, name: 'testy2' };
    item3 = { price: 230, amount: 3, name: 'testy3' };
    item4 = { price: 240, amount: 4, name: 'testy4' };
    item5 = { price: 250, amount: 5, name: 'testy5' };
    savedElements = [item1, item2, item3, item4, item5];
    sut = fixture.componentInstance;
    sut.item = item1;
    sut.savedElements = savedElements;
  });

  it('should create the component', () => {
    expect(sut).toBeTruthy();
  });

  describe('TotalPrice', () => {
    it('should calculate total price', async(() => {
      //Act
      var totalPrice = sut.calculateTotalPrice(savedElements);
      //Assert
      expect(totalPrice).toEqual(3550);
    }));

    it('should display total price', async(() => {
      //Arrange
      sut.savedElements = savedElements;
      sut.totalPrice = sut.calculateTotalPrice(savedElements);

      //Look for changes in UI
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      //Assert
      expect(compiled.querySelector('span').textContent).toContain('3550');
    }))
  });
  describe('SaveChartElement', () => {
    it('should save the current element', () => {
      //Act
      let item6: Item = { price: 6, amount: 6, name: 'testy6' };
      let item7: Item = { price: 7, amount: 7, name: 'testy7' };
      let item8: Item = { price: 8, amount: 8, name: 'testy8' };
      let item9: Item = { price: 9, amount: 9, name: 'testy9' };

      sut.add(item7);
      sut.add(item8);
      sut.add(item6);
      sut.add(item9);

      //Assert
      expect(sut.savedElements).toContain(jasmine.objectContaining(item8));
      expect(sut.savedElements).toContain(jasmine.objectContaining(item7));
      expect(sut.savedElements).toContain(jasmine.objectContaining(item6));
      expect(sut.savedElements).toContain(jasmine.objectContaining(item9));
    });

    it('should update total price in the view', () => {
      //Act
      let item10: Item = { price: 240, amount: 4, name: 'testy11' };
      sut.add(item10);

      //Look for changes in UI
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      //Assert
      expect(compiled.querySelector('span').textContent).toContain('4510');
    });
  });
  describe('Items list Handling', () => {

    it('should remove first item from an array', async(() => {
      expect(sut.savedElements).toContain(jasmine.objectContaining(item1));
      sut.remove(item1);
      expect(sut.savedElements).not.toContain(jasmine.objectContaining(item1));
    }));

    it('should remove other item from an array', async(() => {
      expect(sut.savedElements).toContain(jasmine.objectContaining(item5));
      sut.remove(item5);
      expect(sut.savedElements).not.toContain(jasmine.objectContaining(item5));
    }));
  });

  describe('Prohibit duplicates in the array', () => {
    it('should not allow to save a duplicate value to the array', async(() => {
      //Arrange
      let itemDup1: Item = { name: "ItemDup", amount: 3, price: 220 }
      let itemDup2: Item = { name: "ItemDup", amount: 2, price: 110 }

      //Act
      sut.add(itemDup1);
      sut.add(itemDup2);

      //Assert
      expect(sut.savedElements).toContain(jasmine.objectContaining(itemDup1));
      expect(sut.savedElements).not.toContain(jasmine.objectContaining(itemDup2));
      // expect(result1).toBeTruthy();
      // expect(result2).toBeFalsy();
    }));
  });
});




