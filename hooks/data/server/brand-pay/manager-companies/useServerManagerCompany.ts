import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerManagerCompany = (companyId?: string) => {
  if (!companyId) return undefined;
  return use(getServerApiClient().brandPayControllerAPi.getCompany1(companyId));
};
