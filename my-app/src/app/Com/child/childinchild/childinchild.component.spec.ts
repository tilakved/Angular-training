import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildinchildComponent } from './childinchild.component';

describe('ChildinchildComponent', () => {
  let component: ChildinchildComponent;
  let fixture: ComponentFixture<ChildinchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildinchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildinchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
