import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerManagerCampaign = (campaignId: string) => {
  return use(
    getServerApiClient().brandPayControllerAPi.getCampaign(campaignId)
  );
};
