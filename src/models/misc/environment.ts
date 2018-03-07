export class Environment {
  apiUrl: string;
  mock: boolean;

  constructor(environment: Environment) {
    this.apiUrl = environment.apiUrl;
    this.mock = environment.mock;
  }
}