import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSbrComponent } from './form-sbr.component';

describe('FormSbrComponent', () => {
  let component: FormSbrComponent;
  let fixture: ComponentFixture<FormSbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSbrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
