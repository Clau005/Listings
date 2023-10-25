import { Vcards } from "@/gen/api/VcardsRoute";
import { getClientApiClient } from "../../_openApi/client/getClientApiClient";
import { createSWRFetchQuery } from "../../swr/functions/createSWRFetchQuery";

const KEY = "/vcards";
const vcardsApi = getClientApiClient().vcardsControllerApi;

export const useVCard = createSWRFetchQuery(
    KEY, 
    (args: Vcards.GetVCard.RequestParams) => vcardsApi.getVCard(args.id)
);
