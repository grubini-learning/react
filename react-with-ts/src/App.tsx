import { useRef } from "react";
import { Form } from "./events";
import { Container, InfoBox, Input, Search } from "./types";

export const App = () => {
  const ref = useRef(null);

  return (
    <div>
      <Form />
      <InfoBox mode="hint">hey I am chill</InfoBox>
      <InfoBox mode="warning" severity="high">
        hey I am NOT chill!!
      </InfoBox>
      <Input id="name" label="Your name" type="text" />
      <Container as={"a"} href="#">
        Hey
      </Container>
      <Search label="my search" id="searcher" ref={ref} />
    </div>
  );
};
