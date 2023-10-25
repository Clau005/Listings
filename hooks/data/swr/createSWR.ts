import useSWR, { Fetcher, Key, SWRConfiguration } from "swr";

export type CreateSWROptions<TData, TError, TKey extends Key, TVariable> = {
  primaryKey: string;
  fetcher: (arg: TVariable) => Promise<TData>;
  enabled?: boolean;
} & Omit<SWRConfiguration<TData, TError>, "fetcher">;

export type HookOptions<TData, TVariable, TError> = Omit<
  SWRConfiguration<TData, TError>,
  "fetcher"
> & {
  variables: TVariable;
  enabled?: boolean | undefined;
}

export const createSWR = <
  TData,
  TVariable = unknown,
  TError = unknown,
  TKey extends Key = [string, TVariable]
>(
  options: CreateSWROptions<TData, TError, TKey, TVariable>
) => {
  const {
    primaryKey,
    enabled: optionEnable,
    fetcher,
    ...createdOptions
  } = options;

  const getPrimaryKey = () => {
    return primaryKey;
  };

  const getKey = (variable?: TVariable) => {
    return variable
      ? ([primaryKey, variable] as const)
      : ([primaryKey] as const);
  };

  const getFetcher = (variable: TVariable) => {
    return (_: Key) => fetcher(variable);
  };

  const useSWRHook = (opt: HookOptions<TData, TVariable, TError>) => {
    const { variables, enabled: hookEnable, ...hookOptions } = opt;
    const enabled = optionEnable || hookEnable;

    return useSWR(
      enabled || enabled === undefined ? getKey(variables) : null,
      getFetcher(variables),
      {
        ...createdOptions,
        ...hookOptions,
      }
    );
  };

  return Object.assign(useSWRHook, {
    getPrimaryKey,
    getKey,
    getFetcher,
  });
};
