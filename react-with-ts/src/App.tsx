import { useRef } from "react";
import { Form } from "./events";
import {
  Container,
  InfoBox,
  Input,
  Search,
  Formik,
  type FormikAPI,
} from "./types";

export const App = () => {
  const appForm = useRef<FormikAPI>(null);
  const ref = useRef<HTMLInputElement>(null);

  const handleSave = (data: unknown) => {
    const dta = data as { name: string; age: string };
    console.log(dta);
    appForm.current?.clear();
  };

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

      <Formik ref={appForm} onSave={handleSave}>
        <Input id="name" label="Your name" type="text" name="name" />
        <Input id="age" label="Your age" type="number" name="age" />
      </Formik>
    </div>
  );
};
