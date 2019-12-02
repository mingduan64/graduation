import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqheaderComponent } from './faqheader.component';

describe('FaqheaderComponent', () => {
  let component: FaqheaderComponent;
  let fixture: ComponentFixture<FaqheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
