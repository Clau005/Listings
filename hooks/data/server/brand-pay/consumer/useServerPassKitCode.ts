import { getServerApiClient } from '@/lib/data/_openApi/client/getServerApiClient';
import { use } from 'react';

export const useServerPassKitCode = () => {
  return use(getServerApiClient().brandPayControllerAPi.startPassKitCode());
};
