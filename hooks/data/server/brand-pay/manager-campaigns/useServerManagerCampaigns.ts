import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerManagerCampaigns = () => {
  return use(getServerApiClient().brandPayControllerAPi.getCampaigns1());
};
