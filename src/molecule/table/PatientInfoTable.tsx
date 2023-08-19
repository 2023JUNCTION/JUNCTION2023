import Text from "src/atoms/text/Text";
import dummyPatientsInfo, { PatientInfo } from "src/mocks/dummyPatientInfo";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";
import styled from "styled-components";

import PatientInfoTableRow from "./PatientInfoTableRow";

interface Column {
  Header: string;
  accessor: keyof PatientInfo;
}

export const Columns: Column[] = [
  {
    Header: "name",
    accessor: "patient_name",
  },
  {
    Header: "age",
    accessor: "patient_age",
  },
  {
    Header: "height",
    accessor: "patient_height",
  },
  {
    Header: "weight",
    accessor: "patient_weight",
  },
  {
    Header: "disease",
    accessor: "patient_disease",
  },
  {
    Header: "medication",
    accessor: "patient_medicine",
  },
  {
    Header: "blood pressure",
    accessor: "patient_blood_pressure",
  },
  {
    Header: "blood sugar",
    accessor: "patient_blood_sugar",
  },
  {
    Header: "BMI",
    accessor: "patient_bmi",
  },
];

const Table_styled = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-spacing: 0;
  font-size: 14px;
`;

const THead = styled.thead`
  background-color: ${colorSet.gray10};
  border: none;
`;

const TH = styled.th`
  border: none;
  background-color: ${colorSet.gray10};
  color: ${colorSet.gray50};
  padding: 0 30px;
`;

const THTR = styled.tr`
  height: 50px;
`;

const TBody = styled.tbody`
  tr:nth-child(2n) {
    background-color: ${colorSet.gray05};
  }
`;

const PatientInfoTable = () => {
  const data = dummyPatientsInfo;

  return (
    <Table_styled>
      <THead>
        <THTR>
          {Columns.map((column) => (
            <TH key={column.accessor}>
              <Text font={Font.Medium}>{column.Header}</Text>
            </TH>
          ))}
          <TH></TH>
        </THTR>
      </THead>
      <TBody>
        {data.map((row, rowIndex) => (
          <PatientInfoTableRow key={rowIndex} row={row} rowIndex={rowIndex} />
        ))}
      </TBody>
    </Table_styled>
  );
};

export default PatientInfoTable;
