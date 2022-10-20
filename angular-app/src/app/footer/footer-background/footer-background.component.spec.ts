import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBackgroundComponent } from './footer-background.component';

describe('FooterBackgroundComponent', () => {
  let component: FooterBackgroundComponent;
  let fixture: ComponentFixture<FooterBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
