import { environment as environmentDefault } from './environment-default';
import { environment as environmentStaging } from './environment-staging';
import { environment as environmentProduction } from './environment-production';
import { Environment } from 'src/models/misc/environment';

function getEnvironment(): Environment {
  switch (process.env.REACT_APP_ENVIRONMENT) {
    case 'staging':
      return environmentStaging;
    case 'production':
      return environmentProduction;
    default:
      return environmentDefault;
  }
}

export default getEnvironment();
