import { getClientApiClient } from '../../_openApi/client/getClientApiClient';
import { createSWRCreateMutation } from '../../swr/functions/createSWRCreateMutation';
import { createSWRFetchQuery } from '../../swr/functions/createSWRFetchQuery';
import { BrandPay } from '@/gen/api/BrandPayRoute';

const brandPayManagerApi = getClientApiClient().brandPayControllerAPi;
const KEY = '/brand-pay/manager/companies';

export const useManagerCompany = createSWRFetchQuery(KEY, (arg: BrandPay.GetCompany1.RequestParams) =>
  brandPayManagerApi.getCompany1(arg.companyId)
);

export const useManagerCreateCompany = createSWRCreateMutation(
  KEY,
  (_: null, data: BrandPay.CreateCompany.RequestBody) => brandPayManagerApi.createCompany(data)
);

export const useManagerUpdateCompany = createSWRCreateMutation(
  KEY,
  (arg: BrandPay.UpdateCompany.RequestParams, data: BrandPay.UpdateCompany.RequestBody) =>
    brandPayManagerApi.updateCompany(arg.companyId, data)
);
