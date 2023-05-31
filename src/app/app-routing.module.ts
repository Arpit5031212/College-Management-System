import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticeComponent } from './components/notice/notice.component';
import { LoginComponent } from './user-auth/login/login.component';
import { MarksComponent } from './components/marks/marks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LeaveComponent } from './components/leave/leave.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'marks', component: MarksComponent },
  { path: 'attendance', component: AttendanceComponent},
  { path: 'notice', component: NoticeComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'feedback', component: FeedbackComponent},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
