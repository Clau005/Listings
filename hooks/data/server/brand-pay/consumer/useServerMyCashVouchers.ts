import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerMyCashVouchers = () => {
  return use(getServerApiClient().brandPayControllerAPi.getCashVouchers());
};
