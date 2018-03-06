import { Rxios } from 'rxios';
import env from '../../environment/environment';

export default new Rxios({
  baseURL: env().apiUrl
});