import { loginUser } from "@/utils/my-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useLogin(onLoginSuccess) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (formData) => loginUser(formData),
    onSuccess: (data) => {
      // Invalidate every query with a key that starts with `todos`
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onLoginSuccess(data);
    },
  });
}
export default useLogin;
