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

## Discriminated Unions

Typescript prop grouping to allow specific combinations of props.

- Ex: InfoBox.tsx

```tsx
<>
  <InfoBox mode="hint">hey I am chill</InfoBox>
  <InfoBox mode="warning" severity="high">
    hey I am NOT chill!!
  </InfoBox>
</>
```

## Wrapper Components

Typescript leveraging generics to customize other components and pass the props the base has.

- Ex: Input.tsx

## Predicates and Limitations

Typescript way to ensure the result type of a function and get intellisense.
Limitation because it accepts two or more types and it doesn't necessarily provide feedback when using the component.

- Ex: Button.tsx

## Polymorphic Components

The idea that through a prop we can make a component behave differently and pass their intended props with great auto completion.

- Ex: Container.tsx

## ForwardRef

Used when we want to forward a reference to a ref from the parent and instantiated in the child

- Ex: Search
