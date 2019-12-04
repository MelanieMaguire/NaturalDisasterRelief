import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoutCreatedComponent } from './accout-created.component';

describe('AccoutCreatedComponent', () => {
  let component: AccoutCreatedComponent;
  let fixture: ComponentFixture<AccoutCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccoutCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoutCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
