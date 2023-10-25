import { getClientApiClient } from '../../_openApi/client/getClientApiClient';
import { createSWRCreateMutation } from '../../swr/functions/createSWRCreateMutation';
import { createSWRFetchQuery } from '../../swr/functions/createSWRFetchQuery';
import { BrandPay } from '@/gen/api/BrandPayRoute';

const brandPayConsumerApi = getClientApiClient().brandPayControllerAPi;
const KEY = '/brand-pay/consumer';

// ******************* CONSUMER  PLATFORMS ******************* //

export const useMyPlatforms = createSWRFetchQuery(KEY, () => brandPayConsumerApi.getPlatforms());

export const useCreatePlatform = createSWRCreateMutation(
  KEY,
  (_, data: BrandPay.CreatePlatformHandle.RequestBody) => brandPayConsumerApi.createPlatformHandle(data),
  [KEY]
);

export const useUpdatePlatform = createSWRCreateMutation(
  KEY,
  (arg: BrandPay.UpdatePlatformHandle.RequestParams, data: BrandPay.UpdatePlatformHandle.RequestBody) =>
    brandPayConsumerApi.updatePlatformHandle(arg.id, data),
  [KEY]
);

export const useMakePlatformFavorite = createSWRCreateMutation(
  KEY,
  (arg: BrandPay.MakeFavorite.RequestParams) => brandPayConsumerApi.makeFavorite(arg.id),
  [KEY]
);

// ******************* CONSUMER  WALLET ******************* //

export const useMyWallet = createSWRFetchQuery(KEY, () => brandPayConsumerApi.getMyWallet());

export const useBrandWallet = createSWRFetchQuery(KEY, (arg: BrandPay.GetBrandWallet.RequestParams) =>
  brandPayConsumerApi.getBrandWallet(arg.companyId)
);

export const useMyWalletSummary = createSWRFetchQuery(KEY, () => brandPayConsumerApi.getWalletSummary());

export const useBrandWalletSummary = createSWRFetchQuery(KEY, (arg: BrandPay.GetWalletSummaryForBrand.RequestParams) =>
  brandPayConsumerApi.getWalletSummaryForBrand(arg.companyId)
);
// ******************* PASS KIT ******************* //

export const usePassKitCode = createSWRFetchQuery(KEY, () => brandPayConsumerApi.startPassKitCode());

// ******************* CONSUMER  VOUCHERS && CARDS ******************* //

export const useMyCashVouchers = createSWRFetchQuery(KEY, () => brandPayConsumerApi.getCashVouchers());

export const useSendToVoucher = createSWRCreateMutation(
  KEY,

  (arg: BrandPay.SendToVoucher.RequestParams) => brandPayConsumerApi.sendToVoucher(arg.brandWalletId)
);

export const useSendToCard = createSWRCreateMutation(KEY, (arg: BrandPay.SendToCard.RequestParams) =>
  brandPayConsumerApi.sendToCard(arg.id)
);

export const useSpendOnPremise = createSWRCreateMutation(KEY, (arg: BrandPay.SpendOnPremise.RequestParams) =>
  brandPayConsumerApi.spendOnPremise(arg.id)
);

// ******************* CAMPAIGN REFFER ******************* //
// todo
export const useReferByWhatsapp = createSWRCreateMutation(KEY, (arg: BrandPay.ReferByWhatsapp.RequestParams) =>
  brandPayConsumerApi.referByWhatsapp(arg.number)
);

// todo
export const useReferByPersonalLink = createSWRCreateMutation(KEY, () => brandPayConsumerApi.referByPersonalLink());

// ******************* CAMPAIGNS ******************* //

export const useMyEnrolledCampaigns = createSWRFetchQuery(KEY, () => brandPayConsumerApi.getEnrolledCampaigns());

export const useCampaigns = createSWRFetchQuery(KEY, () => brandPayConsumerApi.getCampaigns2());
export const useCampaignsByCompany = createSWRFetchQuery(KEY, (arg: BrandPay.GetCampaignsByCompany.RequestParams) =>
  brandPayConsumerApi.getCampaignsByCompany(arg.companyId)
);
export const useBrandPayCampaigns = createSWRFetchQuery(KEY, () => brandPayConsumerApi.getBrandPayCampaigns());
