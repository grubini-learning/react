# Optimization

## Profiler

**Switch tick the box that records why a component re rendered in the Profiler settings**

- Bar graph:: They represent the times that a component re rendered and are snapshots, re presenting its own flame graph and rank.

- Flame graph: Another way to represent the component tree 🌳
  - Color coded
    - Gray: represents the components that did not re render while the app did.
    - The more yellow the color is, the longer it took for a component to re render.
- Ranked: In order to rank them, we can move to the _Ranked_

## Technique

```tsx
// Slow component
const Archive = () => {
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 300000 }, () => createRandomPost())
  );

  return (
    <aside>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <p>
              <strong>{post.title}:</strong> {post.body}
            </p>
            {/* <button onClick={() => onAddPost(post)}>Add as new post</button> */}
          </li>
        ))}
      </ul>
    </aside>
  );
};
```

1. **{children}**, we use it when a parent updates a slow component that doe need the state. Start by wrapping the parent that accepts the slow component as a prop (children) and because the prop did not change the only component that gets re rendered is the wrapper.

_This works because React has to create the props before creating the parent and since there is no way a prop causes a parent to re render it does not execute again_

```tsx
const Parent = ({ children }) => {
  const [state, setState] = useState("");

  return <div>{children}</div>;
};

const App = () => {
  return (
    <Parent>
      <Archive />
    </Parent>
  );
};
```

2. **Memo**, Optimization technique that executes a _pure function_ once, and saves the result in memory. If we try to execute with the same arguments, the stored result will be returned.
   - used to prevent child re render when the parent re renders as long as the props stay the same.
   - only makes sense to use it when, a component is slow rendering and it re renders often with the same props.

```tsx
function createRandomPost(): Post {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const Archive = React.memo(Archive);

const App = () => {
    const [searchQuery, setSearchQuery] = useState("");

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
          <Archive />
        </>
      );
}
```

3. Optimize bundle size (Code splitting, lazy loading concept) with miny bundle files.
   a. `const HomePage = lazy(() => import("./pages/HomePage));`
   b.
   ```tsx
   <Suspense fallback={<Spinner />}>
     <Routes>
       <Route index element={<Product />} />
       <Route path="product" element={<Product />} />
     </Routes>
   </Suspense>
   ```
