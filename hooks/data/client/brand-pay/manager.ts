import { getClientApiClient } from '../../_openApi/client/getClientApiClient';
import { createSWRFetchQuery } from '../../swr/functions/createSWRFetchQuery';

const brandPayControllerApi = getClientApiClient().brandPayControllerAPi;
const KEY = '/brand-pay/manager';

// ******************* BRAND PAY MANAGER ******************* //

export const useManager = createSWRFetchQuery(KEY, () => brandPayControllerApi.getBrandSummary());
