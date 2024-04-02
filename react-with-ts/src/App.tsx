import { Form } from "./events";
import { InfoBox, Input } from "./types";

export const App = () => {
  return (
    <div>
      <Form />
      <InfoBox mode="hint">hey I am chill</InfoBox>
      <InfoBox mode="warning" severity="high">
        hey I am NOT chill!!
      </InfoBox>
      <Input id="name" label="Your name" type="text" />
    </div>
  );
};
