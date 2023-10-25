import { CLIENT_CONFIGURATION } from '../configuration/clientConfiguration';
import { Admin } from '@/gen/api/Admin';
import { BrandPay } from '@/gen/api/BrandPay';
import { Campaigns } from '@/gen/api/Campaigns';
import { Onboarding } from '@/gen/api/Onboarding';
import { Passkit } from '@/gen/api/Passkit';
import { Tenant } from '@/gen/api/Tenant';
import { Token } from '@/gen/api/Token';
import { User } from '@/gen/api/User';
import { Vault } from '@/gen/api/Vault';
import { Vcards } from '@/gen/api/Vcards';
import { WalletAddress } from '@/gen/api/WalletAddress';

const clientApiClient = {
  userControllerApi: new User(CLIENT_CONFIGURATION),
  campaignControllerApi: new Campaigns(CLIENT_CONFIGURATION),
  brandPayControllerAPi: new BrandPay(CLIENT_CONFIGURATION),
  walletAddressControllerApi: new WalletAddress(CLIENT_CONFIGURATION),
  tokenControllerApi: new Token(CLIENT_CONFIGURATION),
  onboardingControllerApi: new Onboarding(CLIENT_CONFIGURATION),
  adminControllerApi: new Admin(CLIENT_CONFIGURATION),
  vcardsControllerApi: new Vcards(CLIENT_CONFIGURATION),
  vaultControllerApi: new Vault(CLIENT_CONFIGURATION),
  tenantControllerApi: new Tenant(CLIENT_CONFIGURATION),
  passkitControllerApi: new Passkit(CLIENT_CONFIGURATION)
};

export const getClientApiClient = () => {
  return clientApiClient;
};
