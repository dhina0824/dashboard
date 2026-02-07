import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProducts } from './best-products';

describe('BestProducts', () => {
  let component: BestProducts;
  let fixture: ComponentFixture<BestProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
