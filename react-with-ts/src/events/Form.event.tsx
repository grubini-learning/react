import { type FormEvent } from "react";

export const Form = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const obj: any = {};

    for (const [key, value] of formData.entries()) {
      obj[key] = value;
    }

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" />
      </div>

      <button>Register</button>
    </form>
  );
};
