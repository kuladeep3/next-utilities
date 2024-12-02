import instance from "@/utils/api_instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const addNote = async (noteData) => {
  return instance.post("http://localhost:3000/add/note", noteData);
};

export const useNoteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
};
