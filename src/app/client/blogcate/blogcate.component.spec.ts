import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcateComponent } from './blogcate.component';

describe('BlogcateComponent', () => {
  let component: BlogcateComponent;
  let fixture: ComponentFixture<BlogcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
