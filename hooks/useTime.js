import { fetchCurrentTime } from "@/utils/my-api";
import { useQuery } from "@tanstack/react-query";

function useTime() {
  return useQuery({ queryKey: ["current-time"], queryFn: fetchCurrentTime });
}
export default useTime;
