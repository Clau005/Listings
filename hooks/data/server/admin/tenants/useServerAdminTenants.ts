import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerAdminTenants = () => {
  return use(getServerApiClient().adminControllerApi.getTenants());
};
