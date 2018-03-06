export class Environment {
  public apiUrl: string;
  public mock: boolean;

  constructor(environment: Environment) {
    this.apiUrl = environment.apiUrl;
    this.mock = environment.mock;
  }
}