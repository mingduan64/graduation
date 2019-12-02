import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefaqComponent } from './managefaq.component';

describe('ManagefaqComponent', () => {
  let component: ManagefaqComponent;
  let fixture: ComponentFixture<ManagefaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
