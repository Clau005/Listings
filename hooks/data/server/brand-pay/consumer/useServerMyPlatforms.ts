import { getServerApiClient } from "@/lib/data/_openApi/client/getServerApiClient";
import { use } from "react";

export const useServerMyPlatforms = () => {
  return use(getServerApiClient().brandPayControllerAPi.getPlatforms());
};
