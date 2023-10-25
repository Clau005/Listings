import { getClientApiClient } from '../../_openApi/client/getClientApiClient';
import { createSWRCreateMutation } from '../../swr/functions/createSWRCreateMutation';
import { Token } from '@/gen/api/TokenRoute';

const tokenApi = getClientApiClient().tokenControllerApi;
const KEY = '/token';

export const useVerifyToken = createSWRCreateMutation(KEY, (_: null, data: Token.VerifyToken.RequestBody) =>
  tokenApi.verifyToken(data)
);

export const useWhatsAppLogin = createSWRCreateMutation(KEY, (_: null, data: Token.LoginWithWhatsapp.RequestBody) =>
  tokenApi.loginWithWhatsapp(data)
);

export const useConfirmLoginWithWhatsApp = createSWRCreateMutation(
  KEY,
  (_: null, data: Token.LoginWithWhatsapp1.RequestBody) => tokenApi.loginWithWhatsapp1(data)
);
