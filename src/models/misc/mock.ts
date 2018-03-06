export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestParams {
  url: string;
  body?: object;
  queryParams?: object;
}

export interface HandlerIndex {
  method: Method;
  url: RegExp;
  handler: Function;
}