import useUsers from "@/hooks/useUsers";

function Users() {
  const { data, isLoading, isError } = useUsers();

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
    </section>
  );
}
export default Users;
