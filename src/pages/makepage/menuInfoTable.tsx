import colorSet from "src/styles/colorSet";
import styled from "styled-components";

const Table_styled = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;
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
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
`;

const TB = styled.th`
  border: none;
  size: "0.5rem";
  background-color: white;
  color: ${colorSet.gray50};
  padding: 0 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
`;

const THTR = styled.tr`
  height: 40px;
  border-bottom: 1px solid ${colorSet.gray10};
`;

const TBody = styled.tbody`
  tr:nth-child(2n) {
    background-color: white;
  }
`;

const NutritionInfoDummy = {
  sodium: 10,
  carbohydrate: 10,
  totalSugars: 10,
  protein: 10,
  totalFat: 10,
  transFat: 10,
};

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
          <TB>{NutritionInfoDummy.sodium}mg</TB>
          <TB>{NutritionInfoDummy.carbohydrate}mg</TB>
          <TB>{NutritionInfoDummy.totalSugars}mg</TB>
          <TB>{NutritionInfoDummy.protein}mg</TB>
          <TB>{NutritionInfoDummy.totalFat}mg</TB>
          <TB>{NutritionInfoDummy.transFat}mg</TB>
        </THTR>
      </TBody>
    </Table_styled>
  );
};

export default MenuInfoTable;
