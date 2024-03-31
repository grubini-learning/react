import { PropsWithChildren, createContext, useEffect, useState } from "react";
import axios from "axios";

import { Book } from "../../models";

type TBookContext = {
  books: Book[];
  createBook: (title: string) => void;
  deleteBook: (id: number) => void;
  updateBook: (id: number, title: string) => void;
};

export const BookContext = createContext<TBookContext | undefined>(undefined);

export const BookProvider = ({ children }: PropsWithChildren<{}>) => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title: string) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    setBooks((books) => [...books, response.data]);
  };

  const deleteBook = async (id: number) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    console.log("deleted: ", response.data);

    setBooks((books) => books.filter((book) => book.id !== id));
  };

  const updateBook = async (id: number, title: string) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    console.log("updating: ", response.data);

    setBooks((books) =>
      books.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            title,
          };
        }

        return book;
      })
    );
  };

  return (
    <BookContext.Provider value={{ books, createBook, deleteBook, updateBook }}>
      {children}
    </BookContext.Provider>
  );
};
