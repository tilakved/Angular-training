import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {AddListDialogComponent} from './Com/add-list-dialog/add-list-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ScheduleComponent} from './Com/schedule/schedule.component';
import {TodayComponent} from './Com/today/today.component';
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from './Com/list/list.component';
import {PagenotfoundComponent} from './Com/pagenotfound/pagenotfound.component';
import { TaskListComponent } from './Com/task-list/task-list.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {DatePipe} from "@angular/common";
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonToggleModule} from "@angular/material/button-toggle";


export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: ListComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'today', component: TodayComponent},
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list/:id' ,component: TaskListComponent},
  {path: '**', component: PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddListDialogComponent,
    ScheduleComponent,
    TodayComponent,
    ListComponent,
    PagenotfoundComponent,
    TaskListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonToggleModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
