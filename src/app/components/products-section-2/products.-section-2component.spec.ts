import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSection2Component } from './products-section-2.component';

describe('ProductsSection2Component', () => {
  let component: ProductsSection2Component;
  let fixture: ComponentFixture<ProductsSection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
