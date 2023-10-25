import { Admin } from "@/gen/api/AdminRoute";
import { getClientApiClient } from "../../_openApi/client/getClientApiClient";
import { createSWRCreateMutation } from "../../swr/functions/createSWRCreateMutation";
import { createSWRFetchQuery } from "../../swr/functions/createSWRFetchQuery";

const KEY = "/admin/wallet-address";
const adminApi = getClientApiClient().adminControllerApi;

export const useAdminAddresses = createSWRFetchQuery(KEY, () =>
  adminApi.getAddresses()
);
export const usePreCacheAddresses = createSWRCreateMutation(KEY, () =>
  adminApi.preCacheAddresses()
);

export const useCreateWalletAddressBlock = createSWRCreateMutation(
  KEY,
  (_: null, data: Admin.CreateAddressBlock.RequestBody) =>
    adminApi.createAddressBlock(data)
);
