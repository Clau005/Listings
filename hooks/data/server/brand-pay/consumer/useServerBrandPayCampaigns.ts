import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerBrandPayCampaigns = () => {
  return use(getServerApiClient().brandPayControllerAPi.getBrandPayCampaigns());
};
