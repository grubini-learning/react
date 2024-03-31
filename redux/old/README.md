# Redux

## When?

There are a lot of UI states that update frequently

## Global State management solutions

- Redux
- Zustand
- Recoil
- React Router

## Remote State management solutions

- React Query
- SWR
- RTK Query

## Mechanism

```tsx
const enum Actions {
  DEPOSIT_ACTION = 'DEPOSIT_ACTION'
}
// first we start with an action
const action = () => {
  return {
    type: Actions.DEPOSIT_ACTION,
    payload 50
  }
}
-----------------------> Dispatch
// we get to a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case Actions.DEPOSIT_ACTION:
      return {
        ...state,
        account: state.account + action.payload
      }
    case default:
      return state;
  }
}
-----------------------> Calculates the new state value and sends it to the STORE
// Component that originated the state transition will re render
```

### Reducer

Pure function that calculates the next state based on an action and the current state.

_Usually one reducer per app feature or data domain._
