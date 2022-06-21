import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglReportComponent } from './toggl-report.component';

describe('TogglReportComponent', () => {
  let component: TogglReportComponent;
  let fixture: ComponentFixture<TogglReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
