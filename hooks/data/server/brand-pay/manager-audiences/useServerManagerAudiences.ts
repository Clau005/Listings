import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerManagerAudiences = () => {
  return use(getServerApiClient().brandPayControllerAPi.getAudiences());
};
