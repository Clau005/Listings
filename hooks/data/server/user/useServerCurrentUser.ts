import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

const userApi = getServerApiClient().userControllerApi;

export const useServerCurrentUser = () => {
  return use(userApi.getUser());
};
