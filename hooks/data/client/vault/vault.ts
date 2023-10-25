import { getClientApiClient } from "../../_openApi/client/getClientApiClient";
import { createSWRFetchQuery } from "../../swr/functions/createSWRFetchQuery";

const KEY = "/vault/config";

const vaultApi = getClientApiClient().vaultControllerApi;

export const useVaultConfig = createSWRFetchQuery(
  KEY,
  () => vaultApi.getAppConfig(),
);
