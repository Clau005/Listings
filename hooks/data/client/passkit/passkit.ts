import { Passkit } from "@/gen/api/PasskitRoute";
import { getClientApiClient } from "../../_openApi/client/getClientApiClient";
import { createSWRFetchQuery } from "../../swr/functions/createSWRFetchQuery";

const KEY = "/passkit";
const passkitApi = getClientApiClient().passkitControllerApi;

export const usePasskit = createSWRFetchQuery(KEY, (args: Passkit.GetPasskit.RequestParams) => passkitApi.getPasskit(args.id));
