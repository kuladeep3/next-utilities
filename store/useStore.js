import { create } from "zustand";

const useStore = create((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (value) => set({ firstName: value }),
  updateLastName: (value) => set({ lastName: value }),
}));

export default useStore;
