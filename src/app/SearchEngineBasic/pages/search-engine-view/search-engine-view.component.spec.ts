import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEngineViewComponent } from './search-engine-view.component';

describe('SearchEngineViewComponent', () => {
  let component: SearchEngineViewComponent;
  let fixture: ComponentFixture<SearchEngineViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchEngineViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEngineViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
