import styled from "styled-components";

export interface AreaProps {
  backgroundColor?: string;
  zIndex?: number;
}

const Area = styled.div<AreaProps>`
  z-index: ${(props) => props.zIndex};
  margin-left: 250px;
  width: calc(100vw - 250px);
  height: 100%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : undefined};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-sizing: border-box;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 50px;
`;

export default Area;
