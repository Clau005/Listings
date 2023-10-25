import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerMyTenant = () => {
  return use(getServerApiClient().tenantControllerApi.getMyTenant());
};
