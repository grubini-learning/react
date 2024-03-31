# useEffect

## Potential Issues

1. Understanding stale variable references

```tsx
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Don't do this
    document.body.onclick = () => {
      console.log(count);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setCount((oldCount) => oldCount + 1)}>
        Count: {count}
      </button>
    </div>
  );
};
```

🛑 The example above will always give you 0, because at the time that the `useEffect` ran, that was the value of `count`. Furthermore, the `useEffect` is not re executing when `count` updates because of the empty dependency array.

✅ solution

```tsx
useEffect(() => {
  // Don't do this
  document.body.onclick = () => {
    console.log(count);
  };
}, [count]);
```

_Any time `useEffect` refers to an external variable, we are going to get a stale reference._

- Every state variable, prop, and context value used inside the effect MUST be included in the dependency array.
- All "reactive values", that re connected to state, props or context must be included!

2. Re rendering

```tsx
import { useEffect } from 'react';

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = () => {
    setBooks(books => [...books, {...}])
  }

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return ...
}
```

🛑 Endless re render, because every time we change the state the App function gets re rendered and generates a new `fetchBooks` function, which causes `useEffect` to run again and the cycle begins.

_`useCallback()`, Hook to help React understand that the function isn't actually changing over time_

✅ Solution

```tsx
import { useCallback } from 'react';

  const fetchBooks = () => {
    setBooks(books => [...books, {...}])
  }

const stableFetchBooks = useCallback(fetchBooks, [books]);

useEffect(() => {
    stableFetchBooks();
  }, [stableFetchBooks]);
```

## Custom Hooks

Functions that contain some reusable logic.

_Its easiest to extract logic into the custom hook, rather than making the hook first_

### Build process

1. Make a function called use<T>
2. Find all non JSX code that refers to 1 - 2 pieces of state
3. Cut and paste them into the hook
4. Find not defined errors
5. In the hook return an object with the variables your component needs
6. In the component call the hook
7. Rename the hook to something more meaningful
8. Rename returned properties to something more descriptive

## Use Reducer

An alternative to `useState`. Useful, when you have several closely-related pieces of state.

## useMemo

This is used to memoize any values between renders as long as the inputs (dependencies) stay the same;

```tsx
function createRandomPost(): Post {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
// SLOW COMPONENT
const Archive = ({ archiveOptions : { show }}: {archiveOptions: { show: boolean }}) => {
    const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 300000 }, () => createRandomPost())
  );

  return (
    <aside>
      {show ? <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              {/* <button onClick={() => onAddPost(post)}>Add as new post</button> */}
            </li>
          ))}
        </ul> : false}
    </aside>
  );
};

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const archiveOptions = useMemo(() => {
      show: false,
      title: `Post archive in addition to ${posts.length} main posts.`
    }, [posts.length]);

      const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

      return (
        <>
          <Posts posts={posts}>
          <Archive archiveOption={archiveOptions} />
        </>
      );
}
```

## 🛑🛑 Avoid Overuse 🛑🛑

a. Responding to a user event.
b. Fetching data on component mount. (use React Query).
c. Synchronizing state changes. Try to use derived state and event handlers.
