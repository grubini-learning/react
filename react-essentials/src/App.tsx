import React from "react";
import { Concept, Header, Tabs, Section } from "./components";

import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Section id="core-concepts" title="Time to get started!">
          <ul>
            {CORE_CONCEPTS.map((concept, _idx) => (
              <Concept key={concept.title} {...concept} />
            ))}
          </ul>
        </Section>
        <Section title="Examples" id="examples">
          <Tabs examples={EXAMPLES} />
        </Section>
      </main>

      <section id="create">
        {React.createElement(Header)}
        <div id="content">
          <p>Hello World!</p>
        </div>
        Is the same as below
        {React.createElement(
          "div", // component type
          { id: "content" }, // props to pass to element
          React.createElement("p", null, "Hello World!") // child content
        )}
      </section>
    </div>
  );
}

export default App;
