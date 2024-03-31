# Context

## What is it?

A communication channel that shares information across different components. The flow of information is when any child of the context's provider can register and ask for any kind of data that the created context has.

## Why?

Avoids prop drilling.

## When?

## Set up

1. `const MyContext = createContext()`
2. Specify data the we are going to share. In this example the number 5.
3. Consume the data or gain access from a child component

```tsx
import { useContext, createContext, useState } from 'react';

type MyContextType = {
  num: number;
  add: () => void;
  subtract: () => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

const MyContextProvider = ({children}: PropsWithChildren<{}>) => {
  const [num, setNum] = useState(5);

  const add = () => setNum((num) => num + 1);
  const subtract = () => setNum((num) => num - 1);

  return (
    <MyContext.Provider value={{num, add, subtract}}> {children}
    </MyContext.Provider>
  )
}

const useMyContext = () => {
  const ctx = useContext(MyContext);

  if (ctx === undefined) {
    throw new Error('Ctx is undefined');
  }

  return ctx;
}

function MyComponent = () => {
  const {num, add, subtract} = useMyContext();

  return <>
    <p>{num}</p>
    <button onClick=add></button>
    <button onClick={subtract}></button>
  </>
}

const App = () => {
  return (
    <div className="app">
      <MyContextProvider>
        <MyComponent />
      </MyContextProvider>
    </div>
  )
}
```

## Gotchas

1. A child of the provider does not re render, unless they are consuming the Context.
