import styled from "styled-components";

export interface AreaProps {
  backgroundColor?: string;
  zIndex?: number;
}

const Area = styled.section<AreaProps>`
  z-index: ${(props) => props.zIndex};
  width: 100%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : undefined};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export default Area;
