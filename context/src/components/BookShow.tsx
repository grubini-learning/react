import { useState } from "react";
import BookEdit from "./BookEdit";
import { Book } from "../models";
import { useBookContext } from "../context";

function BookShow({ book }: { book: Book }) {
  const { id, title } = book;
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBook, updateBook } = useBookContext();

  const handleDeleteClick = () => {
    deleteBook(id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id: number, newTitle: string) => {
    setShowEdit(false);
    updateBook(id, newTitle);
  };

  let content = <h3>{title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
