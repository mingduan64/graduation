import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecateComponent } from './managecate.component';

describe('ManagecateComponent', () => {
  let component: ManagecateComponent;
  let fixture: ComponentFixture<ManagecateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
