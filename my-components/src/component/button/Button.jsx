import styled from "styled-components";

export const Button = ({ children, ...delegated }) => {
  return <ButtonWrapper {...delegated}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  --button-background: rgb(22, 22, 22);
  --button-background-hover: rgb(37, 37, 37);
  & {
    background-color: var(--button-background);
    border-radius: 8px;
    border: 1px solid transparent;
    cursor: pointer;
    display: block;
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;
    padding: 0.6em 1.2em;
    /* background-color: red; */
    transition: border-color 0.25s;
    width: 100%;
  }

  &:hover {
    background-color: var(--button-background-hover);
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export default Button;
