import { usePosts } from "@/api/get-posts";
import { Fragment } from "react";

function Posts() {
  const {
    data,
    isPending,
    isError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = usePosts();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <section>
      <h2>Posts page</h2>
      <ol>
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.posts?.map((post) => (
              <li key={post?.id}>
                <span>{post?.id}</span> {" - "}
                <span>{post?.title}</span>
              </li>
            ))}
          </Fragment>
        ))}
      </ol>
      <button
        onClick={fetchNextPage}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </section>
  );
}

export default Posts;
