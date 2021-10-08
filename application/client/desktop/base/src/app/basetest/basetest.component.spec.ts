import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasetestComponent } from './basetest.component';

describe('BasetestComponent', () => {
  let component: BasetestComponent;
  let fixture: ComponentFixture<BasetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});