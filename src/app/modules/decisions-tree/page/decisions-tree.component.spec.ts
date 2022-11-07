import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionsTreeComponent } from './decisions-tree.component';

describe('DecisionsTreeComponent', () => {
  let component: DecisionsTreeComponent;
  let fixture: ComponentFixture<DecisionsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionsTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
