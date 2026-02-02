import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../../service/http/http.service';
import { OrganizationSettings, User } from '../../store/auth/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpService) {}

  getUserInfo(): Observable<any> {
    return this.http.get('/profiles/api/user-info/');
  }

  getOrganizationSettings(): Observable<OrganizationSettings> {
    return this.http.get<OrganizationSettings>('/profiles/api/org_settings/');
  }

  login(body: any): Observable<any> {
    return this.http.post('/profiles/api/token-auth/', body, {
      passToken: false,
    });
  }

  logout(): Observable<any> {
    return this.http.get('/profiles/api/logout/', {});
  }

  verifyOtp(body: any): Observable<any> {
    return this.http.post('/profiles/api/twofa_confirm/', body, {
      passToken: false,
    });
  }

  resendOtp(body: any): Observable<any> {
    return this.http.post('/profiles/api/twofa_resend/', body, {
      passToken: false,
    });
  }

  resetPassword(body: any): Observable<any> {
    return this.http.post('/profiles/api/users/reset_password/', body, {
      passToken: false,
    });
  }

  updateUserProfile(user: User): Observable<User> {
    return this.http.put<User>(`/profiles/api/users/current/`, user, {});
  }

  uploadUserProfilePhoto(payload: any): Observable<User> {
    return this.http.put<any>(`/profiles/api/users/current/`, payload, {
      ignoreJsonContentType: true,
    });
  }
}
