import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerCampaignsByCompany = (companyId: string) => {
  return use(getServerApiClient().brandPayControllerAPi.getCampaignsByCompany(companyId));
};
