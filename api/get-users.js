import instance from "@/utils/api_instance";
import { queryOptions, useQuery } from "@tanstack/react-query";

export async function getUsers(page = 1) {
  try {
    const response = await instance.get(
      `https://dummyjson.com/users?limit=5&skip=${
        page * 5
      }&select=firstName,age`
    );
    console.log("response", response);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data : "Error fetching users"
    );
  }
}

export function getUsersQueryOptions({ page }) {
  return queryOptions({
    queryKey: page ? ["users", { page }] : ["users"],
    queryFn: () => getUsers(page),
  });
}

export const useUsers = ({ queryConfig, page }) => {
  return useQuery({ ...getUsersQueryOptions({ page }), ...queryConfig });
};
