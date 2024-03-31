import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { BookProvider } from "./context/book-context/BookContext";

export const App = () => {
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookProvider>
        <BookList />
        <BookCreate />
      </BookProvider>
    </div>
  );
};
