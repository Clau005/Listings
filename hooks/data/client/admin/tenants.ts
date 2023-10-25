import { Admin } from "@/gen/api/AdminRoute";
import { getClientApiClient } from "../../_openApi/client/getClientApiClient";
import { createSWRFetchQuery } from "../../swr/functions/createSWRFetchQuery";
import { createSWRCreateMutation } from "../../swr/functions/createSWRCreateMutation";

const KEY = "/admin/tenants";
const adminApi = getClientApiClient().adminControllerApi;

export const useAdminTenants = createSWRFetchQuery(KEY, () =>
  adminApi.getTenants()
);

export const useAdminTenant = createSWRFetchQuery(
  KEY,
  (arg: Admin.GetTenant.RequestParams) => adminApi.getTenant(arg.id)
);

export const useAdminCreateTenant = createSWRCreateMutation(
  KEY,
  (_: null, data: Admin.CreateTenant.RequestBody) => adminApi.createTenant(data)
);

export const useAdminDeleteTenant = createSWRCreateMutation(
  KEY,
  (arg: Admin.DeleteTenant.RequestParams) => adminApi.deleteTenant(arg.id)
  // todo extraKeys
);
