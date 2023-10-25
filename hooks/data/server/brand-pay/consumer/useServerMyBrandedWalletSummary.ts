import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerMyBrandedWalletSummary = (companyId: string) => {
  return use(getServerApiClient().brandPayControllerAPi.getWalletSummaryForBrand(companyId));
};
