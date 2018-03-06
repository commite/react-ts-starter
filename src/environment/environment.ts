import { environment as environmentDefault } from './environment-default';
import { environment as environmentStaging } from './environment-staging';
import { environment as environmentProduction } from './environment-production';

export default () => {
  switch (process.env.REACT_APP_ENVIRONMENT) {
    case 'staging':
      return environmentStaging;
    case 'production':
      return environmentProduction;
    default:
      return environmentDefault;
  }
};
