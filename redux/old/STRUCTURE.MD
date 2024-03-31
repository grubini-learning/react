# STRUCTURE

## FLOW

_View -> Action Creator -> Reducer -> Store -> View_

## Action

```ts
type Action {
    type: string;
    payload: any;
}
```

## Types

```ts
const enum MyTypes {
    Type1 = "Type 1",
    Type2 = "Type 2
}
```

## Actions creators

```ts
const myAction = ({ type, payload }: Action) => {
  return { type, payload };
};
```

## Reducers

```ts
type InitialState = {
  type1: string;
  type2: string;
  type3: number;
};
```

```ts
const initialState: InitalState = {
  type1: "",
  type2: "user",
  type3: 500,
};
```

```ts
const reducer = (state = initialState, action): InitialState => {
  const { type, payload } = action;

  switch (type) {
    case MyTypes.Type1:
      return {
        ...state,
        type1: payload,
      };
    default:
      return state;
  }
};
```
