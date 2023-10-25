import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerPublicCompany = (companyId: string) => {
  return use(getServerApiClient().brandPayControllerAPi.getCompany(companyId));
};
