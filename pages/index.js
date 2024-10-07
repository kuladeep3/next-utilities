import { fetchUsers } from "@/utils/my-api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function Home() {
  // Queries
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5000,
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
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
      <Link href="/users">Users</Link>
    </section>
  );
}
export default Home;
