import { ChangeEvent, FormEvent, useState } from "react";
import { Book } from "../models";

type BookEditProps = {
  book: Book;
  onSubmit: (id: number, title: string) => void;
};

function BookEdit({ book, onSubmit }: BookEditProps) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
