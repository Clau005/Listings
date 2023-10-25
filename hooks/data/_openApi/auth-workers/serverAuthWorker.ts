import { authOptions } from "@/lib/auth/authConfig";
import { getServerSession } from "next-auth";

export default async function serverAuthWorker() {
  const session = await getServerSession(authOptions);

  if (session?.accessToken)
    return {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    };
}
