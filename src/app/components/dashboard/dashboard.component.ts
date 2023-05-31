import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  
  constructor(private authService: AuthService, private apiService: ApiServiceService) { }
  
  ngOnInit(): void {
  }

  // check role

  isAdmin(): boolean {
    return this.authService.isAdmin();    
  }

  isTeacher(): boolean {
    return this.authService.isTeacher();
  }

  isStudent(): boolean {
    return this.authService.isStudent();
  }

  getAllStudents() {
    this.apiService.getAllStudents().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getStudentsByClass(_class: string) {
    this.apiService.getStudentsByClass(_class).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }




}
