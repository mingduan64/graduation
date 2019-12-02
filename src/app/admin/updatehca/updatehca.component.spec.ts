import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehcaComponent } from './updatehca.component';

describe('UpdatehcaComponent', () => {
  let component: UpdatehcaComponent;
  let fixture: ComponentFixture<UpdatehcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatehcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
