import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagecarouselComponent } from './homepagecarousel.component';

describe('HomepagecarouselComponent', () => {
  let component: HomepagecarouselComponent;
  let fixture: ComponentFixture<HomepagecarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagecarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagecarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
