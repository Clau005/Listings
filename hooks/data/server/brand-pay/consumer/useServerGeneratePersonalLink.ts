import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerGeneratePersonalLink = () => {
  return use(getServerApiClient().brandPayControllerAPi.referByPersonalLink());
};
