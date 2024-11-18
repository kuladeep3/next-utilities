import instance from "@/utils/api_instance";
import { queryOptions, useQuery } from "@tanstack/react-query";

export async function getUsers() {
  return instance.get(
    `https://dummyjson.com/users?limit=5&select=firstName,age`
  );
}

export function getUsersQueryOptions() {
  return queryOptions({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}

export const useUsers = ({ queryConfig } = {}) => {
  return useQuery({ ...getUsersQueryOptions(), ...queryConfig });
};
