import { SERVER_CONFIGURATION } from '../configuration/serverConfiguration';
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

const serverApiClient = {
  userControllerApi: new User(SERVER_CONFIGURATION),
  campaignControllerApi: new Campaigns(SERVER_CONFIGURATION),
  brandPayControllerAPi: new BrandPay(SERVER_CONFIGURATION),
  walletAddressControllerApi: new WalletAddress(SERVER_CONFIGURATION),
  tokenControllerApi: new Token(SERVER_CONFIGURATION),
  onboardingControllerApi: new Onboarding(SERVER_CONFIGURATION),
  adminControllerApi: new Admin(SERVER_CONFIGURATION),
  vcardsControllerApi: new Vcards(SERVER_CONFIGURATION),
  vaultControllerApi: new Vault(SERVER_CONFIGURATION),
  tenantControllerApi: new Tenant(SERVER_CONFIGURATION),
  passkitControllerApi: new Passkit(SERVER_CONFIGURATION)
};

export const getServerApiClient = () => {
  return serverApiClient;
};
