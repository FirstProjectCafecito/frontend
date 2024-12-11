import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedAnnotatedComponent } from './deleted-annotated.component';

describe('DeletedAnnotatedComponent', () => {
  let component: DeletedAnnotatedComponent;
  let fixture: ComponentFixture<DeletedAnnotatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletedAnnotatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedAnnotatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
