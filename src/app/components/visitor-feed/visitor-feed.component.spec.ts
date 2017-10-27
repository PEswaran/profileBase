import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorFeedComponent } from './visitor-feed.component';

describe('VisitorFeedComponent', () => {
  let component: VisitorFeedComponent;
  let fixture: ComponentFixture<VisitorFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
