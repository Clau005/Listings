import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerManagerCampaignConsumerView = (campaignId: string) => {
  return use(
    getServerApiClient().brandPayControllerAPi.getConsumerView(campaignId)
  );
};
