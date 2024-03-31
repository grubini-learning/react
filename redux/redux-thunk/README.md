# Redux Thunk

Middleware that sits between dispatching and the store. Asynchronous operations before it gets to a reducer.

## Operations like

- asynchronous code
- API calls, timers, logging, etc
- The place for side effects

## Flow

COMPONENT -> DISPATCH -> THUNK MIDDLEWARE -> REDUCER -> STORE

## Steps

1. Install `pnpm add redux-thunk`
2. Apply to store
