import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhcaComponent } from './addhca.component';

describe('AddhcaComponent', () => {
  let component: AddhcaComponent;
  let fixture: ComponentFixture<AddhcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
