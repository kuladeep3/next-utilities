import useTime from "@/hooks/useTime";
import useUsers from "@/hooks/useUsers";
import Link from "next/link";

function Users() {
  const { data, isLoading, isError } = useUsers();
  const {
    data: timerData,
    isLoading: timerLoading,
    isFetching: timerFetching,
  } = useTime();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <section>
      <h1>Users page</h1>
      {data?.map((user) => (
        <div key={user?.id}>
          <span>{user?.id} </span>
          <span>{user?.name}</span>
        </div>
      ))}
      {!timerLoading && (
        <p>
          {timerData?.time} {timerFetching ? "..." : ""}
        </p>
      )}
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
    </section>
  );
}
export default Users;
