import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerCampaignPosts = (id: string) => {
  return use(getServerApiClient().campaignControllerApi.getCampaignPosts(id));
};
