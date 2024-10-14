import useUsers from "@/hooks/useUsers";

function Home() {
  const { data, isLoading, isError } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  return (
    <section>
      <h1>Home page</h1>
      {data?.map((user) => (
        <div key={user?.id}>
          <span>{user?.id} </span>
          <span>{user?.name}</span>
        </div>
      ))}
    </section>
  );
}
export default Home;
