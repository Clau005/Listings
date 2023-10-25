// import { createSWRMutation } from "../createSWRMutation";
// import { revalidationFilterFunction } from "../revalidationFilterFunction";
// import { swrMutationWrapper } from "../swrMutationWrapper";
// export const createSWRCreateMutation = <
//   FUNC extends (arg: ARG, data: DATA) => Promise<RET>,
//   ARG = Parameters<FUNC>[0],
//   DATA = Parameters<FUNC>[1],
//   RET = Awaited<ReturnType<FUNC>>
// >(
//   primaryKey: string,
//   mutatingFn: FUNC
//   extraKeys?: string[]
// ) => {
//   return createSWRMutation<RET, ARG, DATA, Error>({
//     primaryKey: primaryKey,
//     fetcher: (variables) => {
//       return (keys, options) =>
//         swrMutationWrapper(
//           mutatingFn,
//           variables,
//           options.arg,
//           revalidationFilterFunction(keys, keys)
//         );
//     },
//   });
// };
import { createSWRMutation } from '../createSWRMutation';
import { swrMutationWrapper } from '../swrMutationWrapper';
import { Key } from 'swr';

export const createSWRCreateMutation = <
  FUNC extends (arg: ARG, data: DATA) => Promise<RET>,
  KEYSFUNC extends (arg: ARG) => Key[],
  ARG = Parameters<FUNC>[0],
  DATA = Parameters<FUNC>[1],
  RET = Awaited<ReturnType<FUNC>>
>(
  primaryKey: string,
  mutatingFn: FUNC,
  extraKeys?: KEYSFUNC | string[]
) => {
  return createSWRMutation<RET, ARG, DATA, Error>({
    primaryKey: primaryKey,
    fetcher: (variables) => {
      return (keys, options) =>
        swrMutationWrapper(
          mutatingFn,
          variables,
          options.arg,
          keys,
          extraKeys ? (typeof extraKeys === 'function' ? extraKeys(variables) : extraKeys) : undefined
        );
    }
  });
};
