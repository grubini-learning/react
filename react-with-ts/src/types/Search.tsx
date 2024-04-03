import { forwardRef } from "react";

type SearchProps = { label: string; id: string };

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ label, id = "search-input" }, ref) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" ref={ref} />
        🔎
      </div>
    );
  }
);
