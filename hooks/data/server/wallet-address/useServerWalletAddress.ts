import { use } from "react";
import { getServerApiClient } from "../../_openApi/client/getServerApiClient";

export const useServerWalletAddress = () => {
  return use(getServerApiClient().walletAddressControllerApi.getAddress());
};
