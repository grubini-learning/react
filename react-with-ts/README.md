# React with TS

## Events

### onClick

```tsx
const Action = () => {
  const actionHandle = () => {};

  return <button onClick={actionHandle}>Action</button>;
};
```

### onSubmit

```tsx
const Action = () => {
  const goal = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // If we don't specify the generic type we get
    //    Property 'value' does not exist on type 'never'.
    // Because Typescript has no way to infer that the useRef that we se will be of type input
    const name = goal.current!.value;

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" ref={goal} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" name="phone" />
      </div>
      <button>Submit</button>
    </form>
  );
};
```
