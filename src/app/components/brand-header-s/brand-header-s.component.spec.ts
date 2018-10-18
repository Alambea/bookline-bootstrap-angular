import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandHeaderSComponent } from './brand-header-s.component';

describe('BrandHeaderSComponent', () => {
  let component: BrandHeaderSComponent;
  let fixture: ComponentFixture<BrandHeaderSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandHeaderSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandHeaderSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
