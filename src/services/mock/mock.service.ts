/* tslint:disable:no-console */

import { rxiosConfig, Rxios } from 'rxios';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators';
import { GetUserResponse } from '../../models/api/user.model';
import { Method, RequestParams, HandlerIndex } from '../../models/misc/mock';

export class Mock {

  private index: HandlerIndex[] = [
    { method: 'GET', url: /^\/users\/[^\/]+/, handler: this.getUser }
  ];

  constructor(private options?: rxiosConfig) {}

  get<T>(url: string, queryParams?: object): Observable<T> {
    return this.handleRequest('GET', {url: url, queryParams: queryParams});
  }
  post<T>(url: string, body: object, queryParams?: object): Observable<T> {
    return this.handleRequest('POST', {url: url, queryParams: queryParams});
  }
  put<T>(url: string, body: object, queryParams?: object): Observable<T> {
    return this.handleRequest('PUT', {url: url, body: body, queryParams: queryParams});
  }
  patch<T>(url: string, body: object, queryParams?: object): Observable<T> {
    return this.handleRequest('PATCH', {url: url, queryParams: queryParams});
  }
  delete(url: string, queryParams?: object): Observable<{}> {
    return this.handleRequest('DELETE', {url: url, queryParams: queryParams});
  }

  private handleRequest<T>(method: Method, params: RequestParams): Observable<T> {
    for (const index of this.index) {
      if (method === index.method && index.url.exec(params.url)) {
        return index.handler(params).pipe(
          tap(res => console.log(`Mock ${method}`, params, 'Response', res))
        );
      }
    }
    const rxios: Rxios = new Rxios(this.options);
    switch (method) {
      case 'DELETE':
      case 'GET':
        return rxios[method.toLowerCase()](params.url, params.queryParams);  
      default:
        return rxios[method.toLowerCase()](params.url, params.body, params.queryParams);
    }
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