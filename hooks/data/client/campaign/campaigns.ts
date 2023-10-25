import { Campaigns } from "@/gen/api/CampaignsRoute";
import { getClientApiClient } from "../../_openApi/client/getClientApiClient";
import { createSWRFetchQuery } from "../../swr/functions/createSWRFetchQuery";
import { createSWRCreateMutation } from "../../swr/functions/createSWRCreateMutation";

const campaignApi = getClientApiClient().campaignControllerApi;
const KEY = "/api/campaigns";

// ******************* CAMPAIGN  && CAMPAIGN SETTINGS ******************* //

export const useCampaignSettings = createSWRFetchQuery(
  KEY,
  (arg: Campaigns.GetCampaignSettings.RequestParams) =>
    campaignApi.getCampaignSettings(arg.id)
);

export const useUpdateCampaignSettings = createSWRCreateMutation(
  KEY,
  (
    arg: Campaigns.UpdateCampaignSettings.RequestParams,
    data: Campaigns.UpdateCampaignSettings.RequestBody
  ) => campaignApi.updateCampaignSettings(arg.id, data)
);

export const useRefreshCampaign = createSWRCreateMutation(
  KEY,
  (arg: Campaigns.RefreshCampaign.RequestParams) =>
    campaignApi.refreshCampaign(arg.id)
);

export const useCampaigns = createSWRFetchQuery(KEY, () =>
  campaignApi.getCampaigns()
);

export const useCampaign = createSWRFetchQuery(
  KEY,
  (arg: Campaigns.GetCampaignById.RequestParams) =>
    campaignApi.getCampaignById(arg.id)
);

// ******************* CAMPAIGN POSTS ******************* //

export const useCampaignPosts = createSWRFetchQuery(
  KEY,
  (arg: Campaigns.GetCampaignPosts.RequestParams) =>
    campaignApi.getCampaignPosts(arg.campaignId)
);

export const useCampaignPost = createSWRFetchQuery(
  KEY,
  (arg: Campaigns.GetCampaignPost.RequestParams) =>
    campaignApi.getCampaignPost(arg.campaignId, arg.id)
);

export const useUpdateCampaignPost = createSWRCreateMutation(
  KEY,
  (
    arg: Campaigns.UpdateCampaignPosts.RequestParams,
    data: Campaigns.UpdateCampaignPosts.RequestBody
  ) => campaignApi.updateCampaignPosts(arg.campaignId, arg.id, data),
  (args) => [
    [KEY, {campaignId: args.campaignId}], // also revalidate the campaign posts list for this campaign
  ],
);

export const useCreateCampaignPost = createSWRCreateMutation(
  KEY,
  (
    arg: Campaigns.CreateCampaignPosts.RequestParams,
    data: Campaigns.CreateCampaignPosts.RequestBody
  ) => campaignApi.createCampaignPosts(arg.campaignId, data),
  (args) => [
    [KEY, {campaignId: args.campaignId}], // also revalidate the campaign posts list for this campaign
  ],
);

// ******************* CAMPAIGN HISTORY ******************* //

export const useCampaignHistory = createSWRFetchQuery(
  KEY,
  (arg: Campaigns.GetCampaignHistory.RequestParams) =>
    campaignApi.getCampaignHistory(arg.id)
);

// ******************* CAMPAIGN HASHTAG && TWEETS ******************* //

export const useCampaignHashTag = createSWRFetchQuery(
  KEY,
  (arg: Campaigns.GetHashTag.RequestParams) =>
    campaignApi.getHashTag(arg.campaignId, arg.id)
);

export const useCreateCampaignHashTag = createSWRCreateMutation(
  KEY,
  (
    arg: Campaigns.CreateHashTag.RequestParams,
    data: Campaigns.CreateHashTag.RequestBody
  ) => campaignApi.createHashTag(arg.campaignId, data)
);

export const useCampaignHashTagTweets = createSWRFetchQuery(
  KEY,
  (arg: Campaigns.GetHashTagTweets.RequestParams) =>
    campaignApi.getHashTagTweets(arg.campaignId, arg.id)
);

export const useCampaignTweetsReport = createSWRFetchQuery(
  KEY,
  (arg: Campaigns.GetHashTagTweets.RequestParams) =>
    campaignApi.runTweetsReport(arg.campaignId, arg.id)
);
