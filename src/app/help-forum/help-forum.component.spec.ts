import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpForumComponent } from './help-forum.component';

describe('HelpForumComponent', () => {
  let component: HelpForumComponent;
  let fixture: ComponentFixture<HelpForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
