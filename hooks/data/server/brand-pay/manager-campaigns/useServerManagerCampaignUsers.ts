import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerManagerCampaignUsers = (campaignId: string) => {
  return use(
    getServerApiClient().brandPayControllerAPi.getCampaignUsers(campaignId)
  );
};
