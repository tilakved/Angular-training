import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglDashboardComponent } from './toggl-dashboard.component';

describe('TogglDashboardComponent', () => {
  let component: TogglDashboardComponent;
  let fixture: ComponentFixture<TogglDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
