import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerManagerCampaignCreditCards = (campaignId: string) => {
  return use(
    getServerApiClient().brandPayControllerAPi.getCampaignCreditCards(
      campaignId
    )
  );
};
