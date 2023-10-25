import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerManager = () => {
  return use(getServerApiClient().brandPayControllerAPi.getBrandSummary());
};
