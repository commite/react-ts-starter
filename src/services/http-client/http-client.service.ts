import { Rxios, rxiosConfig } from 'rxios';
import { Mock } from '../mock/mock.service';
import env from '../../environment/environment';

const httpConfig: rxiosConfig = {
  baseURL: env.apiUrl
};

let client: Rxios | Mock;
function getHandler(): Rxios | Mock {
  if (!client) {
    client = env.mock ?
      new Mock(httpConfig) :
      new Rxios(httpConfig);
  }

  return client;
}

export default getHandler();