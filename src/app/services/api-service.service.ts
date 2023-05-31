import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiBaseUrl = "https://localhost:44341/api";
  
  constructor(private http: HttpClient) { }

  // CRUD for Student

  addNewStudent(student: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/user/register/student`, student);
  }

  getAllStudents(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/user/students`);
  }

  getStudentByRoll(roll: number): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/user/student/roll`);
  }

  getStudentByEmail(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/user/student/email`, {_email: email});
  }

  getStudentsByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/user/student/name`);
  }

  getStudentsByClass(_class: string): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/user/student/class`);
  }

  getStudentsByCourse(course: string): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/user/student/course`);
  }


  updateStudent(student: any): Observable<any> {
    return this.http.put<any>(`${this.apiBaseUrl}/user/student/update/${student.id}`, student);
  }

  deleteStudent(student: any): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/user/student/delete/${student.id}`);
  }

  // CRUD for Teachers

  addNewTeacher(teacher: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/user/register/teacher`, teacher);
  }

  getTeacherByName(name: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/user/teacher/name`);
  }

  getTeacherByDepartment(department: string): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/user/teacher/department`);
  }

  updateTeacher(teacher: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/user/teacher/update/${teacher.id}`, teacher);
  }

  deleteTeacher(teacher: any): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/user/teacher/delete/${teacher.id}`);
  }
  
}
