export class Environment {
  public apiUrl: string;

  constructor(environment: Environment) {
    this.apiUrl = environment.apiUrl;
  }
}