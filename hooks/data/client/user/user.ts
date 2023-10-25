import { User } from "@/gen/api/UserRoute";
import { getClientApiClient } from "../../_openApi/client/getClientApiClient";
import { createSWRCreateMutation } from "../../swr/functions/createSWRCreateMutation";
import { createSWRFetchQuery } from "../../swr/functions/createSWRFetchQuery";

const KEY = "/api/user";
const userApi = getClientApiClient().userControllerApi;

export const getUser = createSWRFetchQuery(KEY, () => userApi.getUser());

export const useUpdateUser = createSWRCreateMutation(
  KEY,
  (_: null, data: User.UpdateUser.RequestBody) => userApi.updateUser(data)
);
