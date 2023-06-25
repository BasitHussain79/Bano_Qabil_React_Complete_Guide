import styled from "styled-components";

const DropDown = styled.select`
  background-color: ${(props) => (props.noData ? props.noData : "#333")};
  color: ${(props) => (props.color ? props.color : "blue")};
  padding: 0.7rem 1rem;
  font-size: 1.2rem;
  outline: none;
  border-radius: 1.5rem;
`;

export { DropDown };
