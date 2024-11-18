import instance from "@/utils/api_instance";
import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";

const LIMIT = 10;
const getPosts = ({ pageParam }) => {
  return instance.get(
    `https://dummyjson.com/posts?limit=${LIMIT}&skip=${
      pageParam * LIMIT
    }&select=title,reactions,userId`
  );
};

function getPostsQueryOptions({ page }) {
  return infiniteQueryOptions({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialPageParam: page || 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.posts?.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
}

export function usePosts({ page, queryConfig } = {}) {
  return useInfiniteQuery({
    ...getPostsQueryOptions({ page }),
    ...queryConfig,
  });
}
