import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListProductsComponent } from './search-list-products.component';

describe('SearchListProductsComponent', () => {
  let component: SearchListProductsComponent;
  let fixture: ComponentFixture<SearchListProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchListProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
