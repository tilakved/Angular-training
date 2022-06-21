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
import {TogglReportComponent} from "./Com/toggl/toggl-report/toggl-report.component";
import {TogglDashboardComponent} from "./Com/toggl/toggl-dashboard/toggl-dashboard.component";
import {transformer} from "./route-animations";

const routes: Routes = [
  {
    path: 'time-tracker',
    component: TimeTrackerComponent,
    data: {breadcrumb: 'Timetracker', animation : 'fader'},
    children: [
      {path: 'time-log', component: TimeLogComponent, data: {breadcrumb: 'Time-Log', animation : 'fader'}},
      {path: 'time-sheet', component: TimeSheetComponent, data: {breadcrumb: 'Time-sheet', animation : 'fader'}},
      {path: 'extra-hours', component: RequestExtraHoursComponent, data: {breadcrumb: 'Extra-Hours', animation : 'fader'  }}
    ]
  },
  {path: 'company-policy', component: CompanyPolicyComponent, data: {breadcrumb: 'Company-Policy',animation : 'slider'}},
  {
    path: 'leave-management',
    component: LeaveManagementComponent,
    data: {breadcrumb: 'Leave-Management', animation : 'slider'},
    children: [
      {path: 'leaves', component: LeavesComponent, data: {breadcrumb: 'Leaves', animation : 'slider'}},
      {path: 'leave-report', component: LeaveReportComponent, data: {breadcrumb: 'Leave-Report', animation : 'slider'}}
    ]
  },
  {
    path: 'payroll',
    component: PayrollComponent,
    data: {breadcrumb: 'Payroll',animation : 'fader'},
    children: [
      {path: 'salary-slip', component: SalarySlipComponent, data: {breadcrumb: 'Salary-Slip', animation : 'fader'}}
    ]
  },
  {path: 'holiday-management', component: HolidayManagementComponent, data: {breadcrumb: 'Holiday-Management', animation : 'fader'}},
//  2nd button
  {path: 'password-management', component: PasswordManagementComponent, data: {breadcrumb: 'Password-Management', animation : 'fader'}},
//  3rd button
  {path: 'toggl-report', component: TogglReportComponent, data: {breadcrumb:'Toggl-Report', animation : 'fader'}},
  {path: 'toggl-dashboard', component: TogglDashboardComponent, data: {breadcrumb:'Toggl-Dashboard', animation : 'fader'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
