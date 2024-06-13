import { useState } from "react";
import styled from "styled-components";

import AppModal from "./app-modal/AppModal";
import { Button, Select, Modal, Field } from "./component";

import "./App.css";

function App() {
  const [value, setValue] = useState("newest");
  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // aca va la validacion

    if (register) {
      // register logic
    } else {
      // sign in
    }

    console.log("data: ", data);
  };

  let contentForm = (
    <>
      <div style={{ marginBottom: "24px" }}>
        <Field label="Username:" name="username" id="username" type="text" />
      </div>
      <div style={{ marginBottom: "36px" }}>
        <Field
          label="Password:"
          id="password"
          name="password"
          type="password"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
          marginBottom: "24px",
          marginTop: "54px",
        }}
      >
        <div style={{ flex: 1 }}>
          <Button type="submit">Login</Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button
            onClick={() => setIsOpen(false)}
            style={{
              "--button-background": "rgb(217, 0, 0)",
              "--button-background-hover": "rgb(255, 13, 13)",
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
  if (register) {
    contentForm = (
      <>
        <div style={{ marginBottom: "24px" }}>
          <Field label="Username:" id="username" name="username" type="text" />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <Field
            label="Password:"
            id="password"
            name="password"
            type="password"
          />
        </div>
        <div style={{ marginBottom: "24px" }}>
          <Field label="Email:" id="email" name="email" type="email" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "24px",
            marginTop: "54px",
          }}
        >
          <div style={{ flex: 1 }}>
            <Button type="submit">Register</Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button
              onClick={() => setIsOpen(false)}
              style={{
                "--button-background": "rgb(217, 0, 0)",
                "--button-background-hover": "rgb(255, 13, 13)",
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ backgroundColor: "salmon" }}>
        <label
          htmlFor="filter-by"
          style={{
            display: "block",
            textAlign: "start",
            marginBottom: "0.5em",
          }}
        >
          <strong>First name:</strong>
        </label>

        <Field />
      </div>
      <div style={{ backgroundColor: "salmon" }}>
        <label
          htmlFor="filter-by"
          style={{
            display: "block",
            textAlign: "start",
            marginBottom: "0.5em",
          }}
        >
          Filter by:
        </label>

        <Select
          id="test"
          label="test-label"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="newest">Newest Releases</option>
          <option value="price">Price</option>
          <option value="curated">Curated</option>
        </Select>
      </div>
      <Button onClick={() => setIsOpen(true)} style={{ background: "black" }}>
        This is my button
      </Button>
      {isOpen && (
        <AppModal
          isOpen={isOpen}
          registration={register}
          handleDismiss={() => setIsOpen(false)}
          contentStyles={{ width: "50%" }}
        >
          <form onSubmit={submitForm} style={{ width: "100%" }}>
            {contentForm}
          </form>
        </AppModal>
      )}
    </>
  );
}

const Link = styled.a`
  --anchor-color: rgb(24, 115, 204);
  text-decoration: none;
  color: var(--anchor-color);

  &:hover {
    --anchor-color: rgb(52, 155, 255);
  }
`;

export default App;
