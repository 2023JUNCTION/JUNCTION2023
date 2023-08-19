import dummyPatientsInfo, { PatientInfo } from "src/mocks/dummyPatientInfo";

interface Column {
  Header: string;
  accessor: keyof PatientInfo;
}

const Columns: Column[] = [
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
    accessor: "patient_diseases",
  },
  {
    Header: "medication",
    accessor: "patient_medicines",
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

const Table = () => {
  const data = dummyPatientsInfo;

  interface IrenderCaseByCase {
    caseKey: keyof PatientInfo;
    content: any;
  }
  const renderCaseByCase = ({ caseKey, content }: IrenderCaseByCase) => {
    switch (caseKey) {
      case "patient_height":
        return `${content}cm`;
      case "patient_weight":
        return `${content}kg`;
      case "patient_blood_pressure":
        return `${content[0]}mmHg/${content[1]}mmHg`;
      case "patient_blood_sugar":
        return `${content}mg/dL`;
      default:
        return content;
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {Columns.map((column) => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Columns.map((column) => (
              <td key={column.accessor}>
                {renderCaseByCase({
                  caseKey: column.accessor,
                  content: row[column.accessor],
                })}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
