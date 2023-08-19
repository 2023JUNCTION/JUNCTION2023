import React, { useState } from "react";
import colorSet from "src/styles/colorSet";
import styled from "styled-components";

interface ButtonProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  border?: React.CSSProperties["border"];
  borderRadius?: React.CSSProperties["borderRadius"];
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "150px"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "50%"};
  background-color: ${(props) =>
    props.disabled ? "#e0e0e0" : colorSet.gray10};
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  margin: 15px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;
  &:hover {
    border: 3px ${colorSet.primary};
    background-color: ${(props) =>
      props.disabled ? "#e0e0e0" : colorSet.gray40};
  }
  &:focus {
    outline: none;
  }
`;

const Button = ({ ...props }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <StyledButton
      onClick={handleClick}
      disabled={clicked} // Disabling the button when clicked
      {...props}
    >
      {clicked ? "Clicked" : "Click Me"}
    </StyledButton>
  );
};

export default Button;
