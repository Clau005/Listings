import { BareFetcher, Key, mutate } from 'swr';

export const swrMutationWrapper = async <
  FUNC extends (arg: ARG, data: DATA) => Promise<RET>,
  ARG = Parameters<FUNC>[0],
  DATA = Parameters<FUNC>[1],
  RET = Awaited<ReturnType<FUNC>>
>(
  fetcher: FUNC,
  arg: ARG,
  data: DATA,
  keys: [string, any],
  extraKeys?: Key[],
) => {
  const response = await fetcher(arg, data);
  mutate(keys);
  extraKeys && extraKeys.forEach((key) => mutate(key));
  return response;
};