import { getClientApiClient } from '../../_openApi/client/getClientApiClient';
import { createSWRCreateMutation } from '../../swr/functions/createSWRCreateMutation';
import { createSWRFetchQuery } from '../../swr/functions/createSWRFetchQuery';
import { WalletAddress } from '@/gen/api/WalletAddressRoute';

const KEY = '/wallet-address';
const walletAddressApi = getClientApiClient().walletAddressControllerApi;

export const useWalletAddress = createSWRFetchQuery(KEY, () => walletAddressApi.getAddress());

export const useCreateWalletAddress = createSWRCreateMutation(
  KEY,
  (_: null, data: WalletAddress.CreateWallet.RequestBody) => walletAddressApi.createWallet(data)
);

export const useDropWalletRequest = createSWRCreateMutation(
  KEY,
  (_: null, data: WalletAddress.DropWalletRequest.RequestBody) => walletAddressApi.dropWalletRequest(data)
);
