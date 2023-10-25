import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerMyBrandedWallet = (companyId: string) => {
  return use(getServerApiClient().brandPayControllerAPi.getBrandWallet(companyId));
};
