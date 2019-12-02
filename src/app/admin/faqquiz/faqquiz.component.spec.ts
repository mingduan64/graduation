import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqquizComponent } from './faqquiz.component';

describe('FaqquizComponent', () => {
  let component: FaqquizComponent;
  let fixture: ComponentFixture<FaqquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
