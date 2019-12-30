import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeInfoComponent } from './about-me-info.component';

describe('AboutMeInfoComponent', () => {
  let component: AboutMeInfoComponent;
  let fixture: ComponentFixture<AboutMeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
