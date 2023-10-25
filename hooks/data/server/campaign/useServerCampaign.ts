import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerCampaign = (id: string) => {
  return use(getServerApiClient().campaignControllerApi.getCampaignById(id));
};
