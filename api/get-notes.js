import { queryOptions, useQuery } from "@tanstack/react-query";

const { default: instance } = require("@/utils/api_instance");

export const getNotes = async () => {
  return instance.get("http://localhost:3000/notes");
};

export const getNotesQueryOptions = () => {
  return queryOptions({ queryKey: ["notes"], queryFn: getNotes });
};

export const useNotes = ({ queryConfig = {} } = {}) => {
  return useQuery({ ...getNotesQueryOptions(), ...queryConfig });
};
