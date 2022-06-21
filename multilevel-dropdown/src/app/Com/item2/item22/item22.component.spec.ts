import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Item22Component } from './item22.component';

describe('Item22Component', () => {
  let component: Item22Component;
  let fixture: ComponentFixture<Item22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Item22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Item22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
