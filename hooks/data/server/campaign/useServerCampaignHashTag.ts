import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerCampaignHashTag = (
  campaignId: string,
  hashTagId: string
) => {
  return use(
    getServerApiClient().campaignControllerApi.getHashTag(campaignId, hashTagId)
  );
};
