import { getClientApiClient } from '../../_openApi/client/getClientApiClient';
import { createSWRCreateMutation } from '../../swr/functions/createSWRCreateMutation';
import { createSWRFetchQuery } from '../../swr/functions/createSWRFetchQuery';
import { BrandPay } from '@/gen/api/BrandPayRoute';

const brandPayManagerApi = getClientApiClient().brandPayControllerAPi;
const KEY = '/brand-pay/manager/campaigns';

// ******************* CAMPAIGN-MANAGER ******************* //

export const useManagerCampaigns = createSWRFetchQuery(KEY, () => brandPayManagerApi.getCampaigns1());

export const useManagerCampaign = createSWRFetchQuery(KEY, (arg: BrandPay.GetCampaign.RequestParams) =>
  brandPayManagerApi.getCampaign(arg.campaignId)
);

export const useManagerCreateCampaign = createSWRCreateMutation(
  KEY,
  (_: null, data: BrandPay.CreateCampaign.RequestBody) => brandPayManagerApi.createCampaign(data)
);

export const useManagerUpdateCampaign = createSWRCreateMutation(
  KEY,
  (arg: BrandPay.UpdateCampaign.RequestParams, data: BrandPay.UpdateCampaign.RequestBody) =>
    brandPayManagerApi.updateCampaign(arg.campaignId, data)
);

export const useManagerUpdateCampaignStatus = createSWRCreateMutation(
  KEY,
  (arg: BrandPay.UpdateCampaignStat.RequestParams, data: BrandPay.UpdateCampaignStat.RequestBody) =>
    brandPayManagerApi.updateCampaignStat(arg.campaignId, data)
);

export const useCampaignCreditCard = createSWRCreateMutation(KEY, (arg: BrandPay.UseCampaignCreditCard.RequestParams) =>
  brandPayManagerApi.useCampaignCreditCard(arg.campaignId, arg.cardId)
);

// ******************* CAMPAIGN-MANAGER  POSTS ******************* //

export const useReportManagerCampaignPost = createSWRCreateMutation(KEY, (arg: BrandPay.ReportPost.RequestParams) =>
  brandPayManagerApi.reportPost(arg.campaignId, arg.postId)
);

// ******************* CAMPAIGN-MANAGER  USERS ******************* //

export const useManagerCampaignUsers = createSWRFetchQuery(KEY, (arg: BrandPay.GetCampaignUsers.RequestParams) =>
  brandPayManagerApi.getCampaignUsers(arg.campaignId)
);

// ******************* CAMPAIGN-MANAGER  CREDIT CARDS ******************* //

export const useManagerCampaignCreditCards = createSWRFetchQuery(
  KEY,
  (arg: BrandPay.GetCampaignCreditCards.RequestParams) => brandPayManagerApi.getCampaignCreditCards(arg.campaignId)
);

export const useManagerCampaignAddCreditCard = createSWRCreateMutation(
  KEY,
  (arg: BrandPay.AddCampaignCreditCard.RequestParams, data: BrandPay.AddCampaignCreditCard.RequestBody) =>
    brandPayManagerApi.addCampaignCreditCard(arg.campaignId, data)
);

// ******************* CAMPAIGN-MANAGER  CONSUMER VIEW ******************* //

export const useManagerCampaignConsumerView = createSWRFetchQuery(KEY, (arg: BrandPay.GetConsumerView.RequestParams) =>
  brandPayManagerApi.getConsumerView(arg.campaignId)
);
