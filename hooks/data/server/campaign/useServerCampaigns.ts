import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerCampaigns = () => {
  return use(getServerApiClient().campaignControllerApi.getCampaigns());
};
