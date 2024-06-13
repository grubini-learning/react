import React from "react";
import styled from "styled-components";

import Label from "../label/Label";

const Select = ({ id, value, label, row = false, onChange, children }) => {
  function getDisplayedValue(value, children) {
    const childArray = React.Children.toArray(children);
    const selectedChild = childArray.find(
      (child) => child.props.value === value
    );

    return selectedChild.props.children;
  }
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper row={row}>
      {label && <Label htmlFor={id} label={label} />}
      <SelectWrapper>
        <NativeSelect id={id} value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        <PresentationalBit>
          {displayedValue}
          <Chevron>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 24">
              <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z"></path>
            </svg>
          </Chevron>
        </PresentationalBit>
      </SelectWrapper>
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

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
  width: 100%;
  text-align: start;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  color: red;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const PresentationalBit = styled.div`
  color: var(--input-text-color);
  font-size: ${16 / 16}rem;
  padding: 7px 16px;
  padding-right: 52px;
  border-radius: 0.4em;
  border: 1px solid var(--input-border);

  ${NativeSelect}:focus-visible + & {
    box-shadow: 0 0 0 2px var(--offset-white-shadow),
      0 0 0 4px var(--input-border), 0 0 white;
    --input-text-color: black;
  }

  ${NativeSelect}:hover + &, ${NativeSelect}:focus-within + & {
    --input-text-color: black;
  }
`;

const Chevron = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  pointer-events: none;

  & > svg {
    fill: currentColor;
  }
`;

export default Select;
