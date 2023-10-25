import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerCampaignPost = (campaignId: string, postId: string) => {
  return use(
    getServerApiClient().campaignControllerApi.getCampaignPost(
      campaignId,
      postId
    )
  );
};
