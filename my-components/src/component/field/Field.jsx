import styled from "styled-components";

import Label from "../label/Label";

const Field = ({ id, label, row = false, ...delegated }) => {
  return (
    <Wrapper row={row}>
      {label && <Label htmlFor={id} label={label} />}
      <InputWrapper>
        <Input
          id={id}
          name={id}
          {...delegated}
          style={{
            // "--width": 250 + "px",
            "--height": 36 / 16 + "rem",
            "--border-thickness": 1 + "px",
            "--font-size": 14 / 16 + "rem",
          }}
        />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --input-border: hsl(240, 5%, 64.9%);
  --offset-white-shadow: hsl(0, 0%, 100%);
  --placeholder-color: rgb(113, 133, 122);
  --input-text-color: rgb(230, 230, 233);
  display: flex;
  flex-direction: ${(p) => (p.row ? "row" : "column")};
  gap: 12px;
  align-items: ${(p) => (p.row ? "center" : "revert")};
`;

const InputWrapper = styled.label`
  display: block;
  color: var(--input-text-color);
  border: 1px solid var(--input-border);
  border-radius: 0.4em;
  flex: 1;

  &:hover {
    --input-text-color: black;
  }

  &:focus-visible,
  &:focus-within {
    box-shadow: 0 0 0 2px var(--offset-white-shadow),
      0 0 0 4px var(--input-border), 0 0 white;
    --input-text-color: black;
  }
`;

const Input = styled.input`
  width: 100%;
  height: var(--height);
  font-size: var(--font-size);
  border-radius: 4px;
  border: none;
  background-color: transparent;
  padding-left: 16px;
  padding: 0;
  text-indent: 16px;
  color: inherit;
  font-weight: 700;
  outline: none;
  color: currentColor;

  &:hover {
    border-color: currentColor;
  }

  &::placeholder {
    font-weight: 400;
    color: var(--placeholder-color);
  }
`;

export default Field;
