import { fetchUsers } from "@/utils/my-api";
import { useQuery } from "@tanstack/react-query";

// Custom hook for fetching users
const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers, // Assuming fetchUsers is a function that fetches the user data
    staleTime: 1000 * 60 * 5,
  });
};

export default useUsers;
