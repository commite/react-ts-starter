import { GetUserResponse } from '../../models/api/user.model';
import { Observable } from 'rxjs/Observable';
import httpClient from '../http-client/http-client.service';
import { tap } from 'rxjs/operators';
import { store } from '../../store/app-state';
import * as userActions from '../../store/user/user.actions';
import { User } from '../../models/user.model';

export class UserService {

  getUser(userId: number): Observable<GetUserResponse> {
    return httpClient.get(`/users/${userId}`).pipe(
      tap((res: GetUserResponse) => {
        const newUser: User = new User({
          id: res.data.id,
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          avatar: res.data.avatar
        });

        store.dispatch(userActions.set(newUser));
      })
    );
  }

}