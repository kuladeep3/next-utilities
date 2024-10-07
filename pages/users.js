import { fetchUsers } from "@/utils/my-api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function Users() {
  // Queries
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <p>Loading...</p>;
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
      <Link href="/">Home</Link>
    </section>
  );
}
export default Users;
