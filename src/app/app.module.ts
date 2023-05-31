import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoticeComponent } from './components/notice/notice.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LeaveComponent } from './components/leave/leave.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { MarksComponent } from './components/marks/marks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoticeComponent,
    DashboardComponent,
    LeaveComponent,
    FeedbackComponent,
    AttendanceComponent,
    MarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
