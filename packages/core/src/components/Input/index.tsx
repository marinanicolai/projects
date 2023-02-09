import styled from "@emotion/styled";

import { Label } from "../Label";

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  &:focus {
    border-color: #0074d9;
  }
`;

interface Props {
  label?: string;
}

export const Input = ({ label, ...props }: Props) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} />
    </>
  );
};
