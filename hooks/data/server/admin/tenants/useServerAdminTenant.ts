import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerAdminTenant = (id: string) => {
  return use(getServerApiClient().adminControllerApi.getTenant(id));
};
