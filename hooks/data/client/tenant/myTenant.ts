import { Tenant } from "@/gen/api/TenantRoute";
import { getClientApiClient } from "../../_openApi/client/getClientApiClient";
import { createSWRFetchQuery } from "../../swr/functions/createSWRFetchQuery";

const myTenantApi = getClientApiClient().tenantControllerApi;
const KEY = "/tenant";

export const useMyTenant = createSWRFetchQuery(KEY, () =>
  myTenantApi.getMyTenant()
);
