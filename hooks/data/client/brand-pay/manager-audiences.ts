import { getClientApiClient } from '../../_openApi/client/getClientApiClient';
import { createSWRFetchQuery } from '../../swr/functions/createSWRFetchQuery';

const brandPayManagerApi = getClientApiClient().brandPayControllerAPi;
const KEY = '/brand-pay/manager/audiences';

export const useManagerAudiences = createSWRFetchQuery(KEY, () => brandPayManagerApi.getAudiences());
