import { ApiConfig } from "@/gen/api/http-client";
import clientAuthWorker from "../auth-workers/clientAuthWorker";
import { DEFAULT_CONFIGURATION } from "./defaultConfiguration";

export const CLIENT_CONFIGURATION: ApiConfig = {
  ...DEFAULT_CONFIGURATION,
  securityWorker: clientAuthWorker,
};
