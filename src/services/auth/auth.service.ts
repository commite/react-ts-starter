import { LoginBody, LoginResponse } from '../../models/api/auth.model';
import { HttpClient } from '../http-client/http-client.service';
import { Observable } from 'rxjs/Observable';

export class AuthService {

  login(body: LoginBody): Observable<LoginResponse> {
    return HttpClient.post('/login', body);
  }
}