import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedAnnotatedComponent } from './edited-annotated.component';

describe('EditedAnnotatedComponent', () => {
  let component: EditedAnnotatedComponent;
  let fixture: ComponentFixture<EditedAnnotatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditedAnnotatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditedAnnotatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
