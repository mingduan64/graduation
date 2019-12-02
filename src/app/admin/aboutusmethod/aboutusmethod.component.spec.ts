import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusmethodComponent } from './aboutusmethod.component';

describe('AboutusmethodComponent', () => {
  let component: AboutusmethodComponent;
  let fixture: ComponentFixture<AboutusmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
