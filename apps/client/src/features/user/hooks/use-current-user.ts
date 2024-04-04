import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getUserInfo } from "@/features/user/services/user-service";
import { ICurrentUser } from "@/features/user/types/user.types";

export default function useCurrentUser(): UseQueryResult<ICurrentUser> {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      return await getUserInfo();
    },
  });
}
