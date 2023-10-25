import { getClientApiClient } from '../../_openApi/client/getClientApiClient';
import { createSWRCreateMutation } from '../../swr/functions/createSWRCreateMutation';
import { BrandPay } from '@/gen/api/BrandPayRoute';

const brandPayManagerApi = getClientApiClient().brandPayControllerAPi;
const KEY = '/brand-pay/manager/admin/register';

export const useManagerAdminRegister = createSWRCreateMutation(
  KEY,
  (_: null, data: BrandPay.CreateAdminUser.RequestBody) => brandPayManagerApi.createAdminUser(data)
);
