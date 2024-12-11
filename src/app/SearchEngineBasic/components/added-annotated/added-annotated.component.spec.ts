import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedAnnotatedComponent } from './added-annotated.component';

describe('AddedAnnotatedComponent', () => {
  let component: AddedAnnotatedComponent;
  let fixture: ComponentFixture<AddedAnnotatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddedAnnotatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedAnnotatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
