import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerPasskit = (id: string) => {
  return use(getServerApiClient().passkitControllerApi.getPasskit(id));
};
