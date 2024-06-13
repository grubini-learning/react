import styled from "styled-components";

const Label = ({ htmlFor, label, ...delegated }) => {
  return (
    <Wrapper {...delegated} htmlFor={htmlFor}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  text-align: start;
  /* margin-bottom: 0.5em; */
  font-weight: 600;
`;

export default Label;
