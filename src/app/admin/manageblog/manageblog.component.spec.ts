import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageblogComponent } from './manageblog.component';

describe('ManageblogComponent', () => {
  let component: ManageblogComponent;
  let fixture: ComponentFixture<ManageblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
