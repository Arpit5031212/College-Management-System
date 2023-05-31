import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginCreds } from 'src/models/loginCred';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "https://localhost:44341/api";
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.tokenSubject.next(token);
   }

  login(loginObj: LoginCreds): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Auth/login`, loginObj).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.tokenSubject.next(response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }

  getToken(): string | null {
    return this.tokenSubject.getValue();
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  extractToken(response: any): string | null {
    return response?.token ?? null;
  }

  private decodeToken(token: string): any {
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  isAdmin(): boolean {
    const token = this.getToken();
    const decodedToken = token ? this.decodeToken(token) : null;
    return decodedToken?.role === 'Admin';
  }

  isTeacher(): boolean {
    const token = this.getToken();
    const decodedToken = token ? this.decodeToken(token) : null;
    return decodedToken?.role === 'Teacher';
  }

  isStudent(): boolean {
    const token = this.getToken();
    const decodedToken = token ? this.decodeToken(token) : null;
    return decodedToken?.role === 'Student';
  }
}
