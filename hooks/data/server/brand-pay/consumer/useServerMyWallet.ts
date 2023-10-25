import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerMyWallet = () => {
  return use(getServerApiClient().brandPayControllerAPi.getMyWallet());
};
