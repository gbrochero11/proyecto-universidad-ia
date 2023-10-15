/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebscrapingComponent } from './webscraping.component';

describe('WebscrapingComponent', () => {
  let component: WebscrapingComponent;
  let fixture: ComponentFixture<WebscrapingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebscrapingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebscrapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
