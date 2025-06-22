import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isOpen: localStorage.getItem("isSidebarOpen") === "true",
  // true / false
  toggle: () =>
    set((state) => {
      const newValue = !state.isOpen;
      localStorage.setItem("isSidebarOpen", newValue.toString());
      return { isOpen: newValue };
    }),
  // anyValue
  // setOpen: (value) => {
  //   console.log("value", value);
  //   localStorage.setItem("isSidebarOpen", value.toString());
  //   set({ isOpen: value });
  // },
}));
