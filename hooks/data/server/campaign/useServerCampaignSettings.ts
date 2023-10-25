import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerCampaignSettings = (id: string) => {
  return use(
    getServerApiClient().campaignControllerApi.getCampaignSettings(id)
  );
};
