import { RequestParams } from "@/gen/api/http-client";
import { getSession } from "next-auth/react";

export default async function clientAuthWorker(): Promise<RequestParams | void> {
  const session = await getSession();
  if (session?.accessToken)
    return {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    };
}
