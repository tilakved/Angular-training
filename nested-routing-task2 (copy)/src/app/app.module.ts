import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeTrackerComponent } from './Com/time-tracker/time-tracker.component';
import { CompanyPolicyComponent } from './Com/company-policy/company-policy.component';
import { LeaveManagementComponent } from './Com/leave-management/leave-management.component';
import { PayrollComponent } from './Com/payroll/payroll.component';
import { HolidayManagementComponent } from './Com/holiday-management/holiday-management.component';
import { PasswordManagementComponent } from './Com/password-management/password-management.component';
import { TogglReportComponent } from './Com/toggl/toggl-report/toggl-report.component';
import { TogglDashboardComponent } from './Com/toggl/toggl-dashboard/toggl-dashboard.component';
import { TimeLogComponent } from './Com/time-tracker/time-log/time-log.component';
import { TimeSheetComponent } from './Com/time-tracker/time-sheet/time-sheet.component';
import { RequestExtraHoursComponent } from './Com/time-tracker/request-extra-hours/request-extra-hours.component';
import { LeavesComponent } from './Com/leave-management/leaves/leaves.component';
import { LeaveReportComponent } from './Com/leave-management/leave-report/leave-report.component';
import { SalarySlipComponent } from './Com/payroll/salary-slip/salary-slip.component';
import { TogglComponent } from './Com/toggl/toggl.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeTrackerComponent,
    CompanyPolicyComponent,
    LeaveManagementComponent,
    PayrollComponent,
    HolidayManagementComponent,
    PasswordManagementComponent,
    TogglReportComponent,
    TogglDashboardComponent,
    TimeLogComponent,
    TimeSheetComponent,
    RequestExtraHoursComponent,
    LeavesComponent,
    LeaveReportComponent,
    SalarySlipComponent,
    TogglComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
