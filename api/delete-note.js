import instance from "@/utils/api_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const deleteNote = (noteId) => {
  return instance.delete("http://localhost:3000/note", { data: { noteId } });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });
};
