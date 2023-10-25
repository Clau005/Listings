import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerMyEnrolledCampaigns = () => {
  return use(getServerApiClient().brandPayControllerAPi.getEnrolledCampaigns());
};
