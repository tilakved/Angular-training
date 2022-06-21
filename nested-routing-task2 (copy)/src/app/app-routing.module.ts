import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimeTrackerComponent} from "./Com/time-tracker/time-tracker.component";
import {TimeLogComponent} from "./Com/time-tracker/time-log/time-log.component";
import {TimeSheetComponent} from "./Com/time-tracker/time-sheet/time-sheet.component";
import {RequestExtraHoursComponent} from "./Com/time-tracker/request-extra-hours/request-extra-hours.component";
import {CompanyPolicyComponent} from "./Com/company-policy/company-policy.component";
import {LeaveManagementComponent} from "./Com/leave-management/leave-management.component";
import {LeavesComponent} from "./Com/leave-management/leaves/leaves.component";
import {LeaveReportComponent} from "./Com/leave-management/leave-report/leave-report.component";
import {PayrollComponent} from "./Com/payroll/payroll.component";
import {SalarySlipComponent} from "./Com/payroll/salary-slip/salary-slip.component";
import {HolidayManagementComponent} from "./Com/holiday-management/holiday-management.component";
import {PasswordManagementComponent} from "./Com/password-management/password-management.component";
import {TogglComponent} from "./Com/toggl/toggl.component";
import {TogglReportComponent} from "./Com/toggl/toggl-report/toggl-report.component";
import {TogglDashboardComponent} from "./Com/toggl/toggl-dashboard/toggl-dashboard.component";

const routes: Routes = [
  {
    path: 'time-tracker',
    component: TimeTrackerComponent,
    children: [
      {path: 'time-log', component: TimeLogComponent},
      {path: 'time-sheet', component: TimeSheetComponent},
      {path: 'extra-hours', component: RequestExtraHoursComponent}
    ]
  },
  {path: 'company-policy', component: CompanyPolicyComponent},
  {
    path: 'leave-management',
    component: LeaveManagementComponent,
    children: [
      {path: 'leaves', component: LeavesComponent},
      {path: 'leave-report', component: LeaveReportComponent}
    ]
  },
  {
    path: 'payroll',
    component: PayrollComponent,
    children: [
      {path: 'salary-slip', component: SalarySlipComponent}
    ]
  },
  {path: 'holiday-management', component: HolidayManagementComponent},
//  2nd button
  {path: 'password-management', component: PasswordManagementComponent},
//  3rd button
  {path: 'toggl-report', component: TogglReportComponent},
  {path: 'toggl-dashboard', component: TogglDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
