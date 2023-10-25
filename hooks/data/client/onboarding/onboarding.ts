import { Onboarding } from "@/gen/api/OnboardingRoute";
import { getClientApiClient } from "../../_openApi/client/getClientApiClient";
import { createSWRCreateMutation } from "../../swr/functions/createSWRCreateMutation";

const onboardingApi = getClientApiClient().onboardingControllerApi;
const KEY = "/onboarding";

export const useRegisterWhatsAppUser = createSWRCreateMutation(
  KEY,
  (_: null, data: Onboarding.StartWhatsAppUser.RequestBody) =>
    onboardingApi.startWhatsAppUser(data)
);

export const useVerifyWhatsAppUserCode = createSWRCreateMutation(
  KEY,
  (_: null, data: Onboarding.StartWhatsAppUser1.RequestBody) =>
    onboardingApi.startWhatsAppUser1(data)
);

export const useCheckUsername = createSWRCreateMutation(
  KEY,
  (_: null, data: Onboarding.CheckUsername.RequestBody) =>
    onboardingApi.checkUsername(data)
);
