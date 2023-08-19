import colorSet from "src/styles/colorSet";
import styled from "styled-components";

interface ButtonProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  border?: React.CSSProperties["border"];
  borderRadius?: React.CSSProperties["borderRadius"];
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
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
  box-shadow: ${(props) =>
    props.disabled
      ? "none"
      : "inset -10px -10px 10px rgba(151, 151, 151, 0.5)"};
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "#e0e0e0" : colorSet.gray40};
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
