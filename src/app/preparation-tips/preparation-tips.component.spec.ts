import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationTipsComponent } from './preparation-tips.component';

describe('PreparationTipsComponent', () => {
  let component: PreparationTipsComponent;
  let fixture: ComponentFixture<PreparationTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparationTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
