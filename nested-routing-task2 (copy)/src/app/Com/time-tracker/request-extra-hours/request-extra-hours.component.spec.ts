import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestExtraHoursComponent } from './request-extra-hours.component';

describe('RequestExtraHoursComponent', () => {
  let component: RequestExtraHoursComponent;
  let fixture: ComponentFixture<RequestExtraHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestExtraHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestExtraHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
