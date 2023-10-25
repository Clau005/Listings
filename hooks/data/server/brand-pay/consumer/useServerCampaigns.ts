import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerCampaigns = () => {
  return use(getServerApiClient().brandPayControllerAPi.getCampaigns2());
};
