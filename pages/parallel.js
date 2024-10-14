import useUsers from "@/hooks/useUsers";

function Parallel() {
  return (
    <section className="parallelPage">
      <aside>
        <UsersCounter />
      </aside>
      <div>
        <UsersList />
      </div>
    </section>
  );
}
export default Parallel;

function UsersCounter() {
  const { data: users, isPending, isError } = useUsers();
  return <p>No of Users: {isPending ? "..." : users?.length}</p>;
}

function UsersList() {
  const { data: users, isPending, isError } = useUsers();

  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error!</p>;
  }
  return users?.map((user) => (
    <div key={user?.id}>
      <span>{user?.id} </span>
      <span>{user?.name}</span>
    </div>
  ));
}
