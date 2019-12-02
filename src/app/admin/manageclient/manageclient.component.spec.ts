import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageclientComponent } from './manageclient.component';

describe('ManageclientComponent', () => {
  let component: ManageclientComponent;
  let fixture: ComponentFixture<ManageclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
