import { useContext } from "react";

import { BookContext } from "./BookContext";

export const useBookContext = () => {
  const context = useContext(BookContext);

  if (context === undefined) {
    throw new Error("Book context is undefined");
  }

  return context;
};
