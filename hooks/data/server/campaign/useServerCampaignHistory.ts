import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerCampaignHistory = (id: string) => {
  return use(getServerApiClient().campaignControllerApi.getCampaignHistory(id));
};
