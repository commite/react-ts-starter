/* tslint:disable:no-console */

import { GetUserResponse } from '../../models/api/user.model';
import { Method, RequestParams, HandlerIndex } from '../../models/misc/mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators';

export class MockHandlers {
  
  private index: HandlerIndex[] = [
    { method: 'GET', url: /^\/users\/[^\/]+/, handler: this.getUser }
  ];

  handle<T>(method: Method, params: RequestParams): Observable<T> | null {
    for (const index of this.index) {
      if (method === index.method && index.url.exec(params.url)) {
        return index.handler(params).pipe(
          tap(res => console.log(`Mock ${method}`, params, 'Response', res))
        );
      }
    }
    return null;
  }

  private getUser(params: RequestParams): Observable<GetUserResponse> {
    return of({
        data: {
          'id': 0,
          'first_name': 'Mock',
          'last_name': 'Mocked',
          'avatar': ''
        }
      }
    );
  }
}