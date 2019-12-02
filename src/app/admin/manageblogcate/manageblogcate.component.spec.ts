import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageblogcateComponent } from './manageblogcate.component';

describe('ManageblogcateComponent', () => {
  let component: ManageblogcateComponent;
  let fixture: ComponentFixture<ManageblogcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageblogcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageblogcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
