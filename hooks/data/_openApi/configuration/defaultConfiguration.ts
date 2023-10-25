import { env } from '@/env';
import { ApiConfig } from '@/gen/api/http-client';

export const DEFAULT_CONFIGURATION: ApiConfig = {
  baseUrl: env.NEXT_PUBLIC_SWAGGER_API_BASE_PATH,
  baseApiParams: {
    format: 'json'
  }
};
