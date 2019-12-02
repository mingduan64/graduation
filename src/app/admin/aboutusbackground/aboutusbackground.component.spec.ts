import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusbackgroundComponent } from './aboutusbackground.component';

describe('AboutusbackgroundComponent', () => {
  let component: AboutusbackgroundComponent;
  let fixture: ComponentFixture<AboutusbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusbackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
