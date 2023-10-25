import { ApiConfig } from "@/gen/api/http-client";
import { DEFAULT_CONFIGURATION } from "./defaultConfiguration";
import serverAuthWorker from "../auth-workers/serverAuthWorker";

export const SERVER_CONFIGURATION: ApiConfig = {
  ...DEFAULT_CONFIGURATION,
  securityWorker: serverAuthWorker,
};
