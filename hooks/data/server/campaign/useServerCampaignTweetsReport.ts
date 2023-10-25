import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerCampaignTweetsReport = (
  campaignId: string,
  hashTagId: string
) => {
  return use(
    getServerApiClient().campaignControllerApi.runTweetsReport(
      campaignId,
      hashTagId
    )
  );
};
