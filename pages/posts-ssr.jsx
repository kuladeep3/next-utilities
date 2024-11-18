import usePosts from "@/hooks/usePosts";
import { fetchPosts } from "@/utils/my-api";
import { dehydrate, QueryClient } from "@tanstack/react-query";

function Posts() {
  const { data, isLoading, isError } = usePosts();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong!</p>;
  }
  return (
    <section>
      <h1>Posts page</h1>
      {data?.map((post) => (
        <div key={post?.id}>
          <span>{post?.id}</span> {" - "}
          <span>{post?.title}</span>
        </div>
      ))}
    </section>
  );
  return <p>Hello posts</p>;
}
export default Posts;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
