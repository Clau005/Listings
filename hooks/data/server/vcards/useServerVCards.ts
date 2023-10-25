import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerVCard = (id: string) => {
  return use(getServerApiClient().vcardsControllerApi.getVCard(id));
};
