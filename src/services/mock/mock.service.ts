import { rxiosConfig, Rxios } from 'rxios';
import { Observable } from 'rxjs/Observable';
import { Method, RequestParams } from '../../models/misc/mock';
import { MockHandlers } from './mock.handlers';

export class Mock {

  private handlers: MockHandlers;
  constructor(private options?: rxiosConfig) {
    this.handlers = new MockHandlers();
  }

  get<T>(url: string, queryParams?: object): Observable<T> {
    return this.handleRequest('GET', {url: url, queryParams: queryParams});
  }
  post<T>(url: string, body: object, queryParams?: object): Observable<T> {
    return this.handleRequest('POST', {url: url, body: body, queryParams: queryParams});
  }
  put<T>(url: string, body: object, queryParams?: object): Observable<T> {
    return this.handleRequest('PUT', {url: url, body: body, queryParams: queryParams});
  }
  patch<T>(url: string, body: object, queryParams?: object): Observable<T> {
    return this.handleRequest('PATCH', {url: url, body: body, queryParams: queryParams});
  }
  delete(url: string, queryParams?: object): Observable<{}> {
    return this.handleRequest('DELETE', {url: url, queryParams: queryParams});
  }

  private handleRequest<T>(method: Method, params: RequestParams): Observable<T> {
    const mockResponse: Observable<T> | null = this.handlers.handle(method, params);

    if (mockResponse) {
      return mockResponse;
    } else {
      const rxios: Rxios = new Rxios(this.options);
      switch (method) {
        case 'DELETE':
        case 'GET':
          return rxios[method.toLowerCase()](params.url, params.queryParams);  
        default:
          return rxios[method.toLowerCase()](params.url, params.body, params.queryParams);
      }
    }    
  }
}