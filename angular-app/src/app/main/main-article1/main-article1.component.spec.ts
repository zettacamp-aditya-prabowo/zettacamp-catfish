import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArticle1Component } from './main-article1.component';

describe('MainArticle1Component', () => {
  let component: MainArticle1Component;
  let fixture: ComponentFixture<MainArticle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainArticle1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainArticle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
