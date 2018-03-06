import { Rxios, rxiosConfig } from 'rxios';
import { Mock } from '../mock/mock.service';
import env from '../../environment/environment';

const httpConfig: rxiosConfig | undefined = {
  baseURL: env().apiUrl
};

function getHandler(): Rxios | Mock {
  return env().mock ?
    new Mock(httpConfig) :
    new Rxios(httpConfig);
}

export default getHandler();