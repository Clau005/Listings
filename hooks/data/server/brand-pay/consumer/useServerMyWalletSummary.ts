import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerMyWalletSummary = () => {
  return use(getServerApiClient().brandPayControllerAPi.getWalletSummary());
};
