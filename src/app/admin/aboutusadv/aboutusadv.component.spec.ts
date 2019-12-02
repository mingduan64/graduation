import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusadvComponent } from './aboutusadv.component';

describe('AboutusadvComponent', () => {
  let component: AboutusadvComponent;
  let fixture: ComponentFixture<AboutusadvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusadvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusadvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
