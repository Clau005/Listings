import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerAdminAddresses = () => {
  return use(getServerApiClient().adminControllerApi.getAddresses());
};
