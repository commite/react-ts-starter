export class Environment {
  apiUrl: string;
  mock: boolean;
  devTools: boolean;

  constructor(environment: Environment) {
    this.apiUrl = environment.apiUrl;
    this.mock = environment.mock;
    this.devTools = environment.devTools;
  }
}