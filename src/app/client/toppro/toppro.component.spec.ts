import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopproComponent } from './toppro.component';

describe('TopproComponent', () => {
  let component: TopproComponent;
  let fixture: ComponentFixture<TopproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
