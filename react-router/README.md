# React Router

We match different URLS to different UI Views.

## Config ESLINT

1. install eslint, vite-plugin-eslint eslint-config-react-app
2. create `eslintrc.json`
3. add in `vite.config.js`

## Start up Guide

1. Create a `pages` folder to render when in the URLS of our application.
2. Create the pages of your application
3. Install `pnpm add react-router-dom`
4. Import `BrowserRouter` with `Routes` in `App`.

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
</BrowserRouter>
```

## Linking between pages

```tsx
<Link to="/pricing" />
```

```tsx
<Navlink to="/pricing" />
```

## Nested routes

```tsx
<Route path="/pricing" element={<HomePage />}>
  <Route path="total" element={<Child />} />
</Route>
```

_Use Outlet from react-router-dom to render the child routes_

## Default Route (Indexed)

- Its a route that is displayed by default with the index

## Dynamic Routes

1. Set up

```tsx
<Route path="cities/:id" element={<City />} />
```

2. Trigger

```tsx
<Link className={classes.cityItem} to={`${id}`}>
  ...
</Link>
```

3. Get param

```tsx
import { useParams } from "react-router-dom";
const { id } = useParams();
const [searchParams, setSearchParams] = useSearchParams();

const lat = searchParams.get("lat");
```

## Programmatic Navigation

```tsx
const navigate = useNavigate();
navigate("form");
  <Route index element={<Navigate replace to="cities" />} /> for nested routes, replace is to replace the last element in the history stack.
```

_`NavLink` gives active class to the activated route_

_its important that the url start with a `/` so that the path begins from the root_

## Tips

1. `path="*"` acts as a fall through guard, if the user tries to access a route that does not exists.
