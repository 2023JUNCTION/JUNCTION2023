import colorSet from "src/styles/colorSet";
import styled from "styled-components";

const Table_styled = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;
  width: "700px";
  margin-top: 30px;
  margin-bottom: 30px;
`;

const THead = styled.thead`
  background-color: ${colorSet.gray10};
  border: none;
`;

const TH = styled.th`
  border: none;
  size: "0.5rem";
  background-color: ${colorSet.gray10};
  color: ${colorSet.gray50};
  padding: 0 30px;
`;

const TB = styled.th`
  border: none;
  size: "0.5rem";
  background-color: white;
  color: ${colorSet.gray50};
  padding: 0 30px;
`;

const THTR = styled.tr`
  height: 50px;
`;

const TBody = styled.tbody`
  tr:nth-child(2n) {
    background-color: white;
  }
`;

const MenuInfoTable = () => {
  return (
    <Table_styled>
      <THead>
        <THTR>
          <TH>Sodium</TH>
          <TH>Carbohydrate</TH>
          <TH>Total Sugars</TH>
          <TH>Protein</TH>
          <TH>Total Fat</TH>
          <TH>Trans Fat</TH>
        </THTR>
      </THead>
      <TBody>
        <THTR>
          <TB>10mg</TB>
          <TB>10mg</TB>
          <TB>10mg</TB>
          <TB>10mg</TB>
          <TB>10mg</TB>
          <TB>10mg</TB>
        </THTR>
      </TBody>
    </Table_styled>
  );
};

export default MenuInfoTable;
