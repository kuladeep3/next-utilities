import { useUsers } from "@/api/get-users";

function Users() {
  const { data, isLoading, isError } = useUsers({ page: 0 });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <section>
      <h1>Users page</h1>
      {data?.users?.map((user) => (
        <div key={user?.id}>
          <span>{user?.id} </span>
          <span>{user?.firstName}</span>
        </div>
      ))}
    </section>
  );
}
export default Users;
