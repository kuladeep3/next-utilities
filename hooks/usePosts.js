import { fetchPosts } from "@/utils/my-api";
import { useQuery } from "@tanstack/react-query";

function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
  });
}

export default usePosts;
