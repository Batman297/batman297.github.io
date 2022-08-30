import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 120px;
  width: auto;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  font-family: "EB Garamond";
  letter-spacing: 0.5px;
  padding: 3px 15px;
  font-weight: bold;
  border: 2px solid black;
  cursor: pointer;
  color: black;

  background: linear-gradient(to left, #e8e8e8 50%, black 50%) right;
  background-size: 200%;
  transition: 0.2s ease-out;

  &:hover {
    background-position: left;
    color: #e8e8e8;
  }
`;

export const LinkButton = styled(BaseButton)`
  background: unset;
  background-size: unset;
  border: unset;
  transition: 0.2s ease-out;

  &:hover {
    color: black;
    padding-right: 5px;
    background-position: left;
  }
`;
