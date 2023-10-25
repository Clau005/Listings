import { Key } from "swr";
import { createSWR } from "../createSWR";

export const createSWRFetchQuery = <
  FUNC extends (arg: ARG) => Promise<RET>,
  ARG = Parameters<FUNC>[0],
  RET = Awaited<ReturnType<FUNC>>
>(
  primaryKey: string,
  fetchingFn: FUNC
) => {
  return createSWR<RET, ARG, Error>({
    primaryKey: primaryKey,
    fetcher: fetchingFn,
  });
};
