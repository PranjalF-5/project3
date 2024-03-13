import styled from "styled-components";

export const Button = styled.button`
  margin-top: 20px;
  color: white;
  padding: 10px 18px;
  background: black;
  min-width: 220px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: black; /* Adjusted for better contrast */
    border: 1px solid white; /* Adjusted for better contrast */
    color: white; /* Adjusted for better contrast */
  }

  /* Adjustments for 100% screen magnification */
  @media screen and (max-width: 100%) {
    min-width: 100%; /* Ensures the button takes full width */
  }
`;
