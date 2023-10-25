import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerVaultConfig = () => {
  return use(getServerApiClient().vaultControllerApi.getAppConfig());
};
