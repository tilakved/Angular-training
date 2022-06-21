import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestComponent } from './ng-test.component';

describe('NgTestComponent', () => {
  let component: NgTestComponent;
  let fixture: ComponentFixture<NgTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
