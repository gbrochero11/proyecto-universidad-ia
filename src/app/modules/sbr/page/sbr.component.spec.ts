import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbrComponent } from './sbr.component';

describe('SbrComponent', () => {
  let component: SbrComponent;
  let fixture: ComponentFixture<SbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
