import { useState } from "react";
import { TableArrow } from "src/assets/Icons";
import Tag from "src/atoms/tag/Tag";
import Text from "src/atoms/text/Text";
import { PatientInfo } from "src/mocks/dummyPatientInfo";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";
import styled from "styled-components";

import { Columns } from "./PatientInfoTable";

const TR = styled.tr<{ isClicked: boolean }>`
  height: ${({ isClicked }) => (isClicked ? "100px" : "50px")};
  color: ${colorSet.black};
  border-bottom: 1px solid ${colorSet.stroke};
`;

const TD = styled.td`
  text-align: center;
`;

const TableArrowWrapper = styled.div<{ isClicked: boolean }>`
  transform: ${({ isClicked }) =>
    isClicked ? "rotate(180deg)" : "rotate(0deg)"};
`;

interface PatientInfoTableRowProps {
  row: PatientInfo;
  rowIndex: number;
}

interface IrenderCaseByCase {
  caseKey: keyof PatientInfo;
  content: any;
}

const TagRenderer = ({ color, label }: { color: string; label: string }) => {
  return (
    <div
      style={{
        transform: "translateY(18px)",
      }}
    >
      <Tag color={color}>
        <Text color={colorSet.white} font={Font.Regular}>
          {label}
        </Text>
      </Tag>
    </div>
  );
};

const renderCaseByCase = ({ caseKey, content }: IrenderCaseByCase) => {
  switch (caseKey) {
    case "patient_height":
      return `${content}`;
    case "patient_weight":
      return `${content}`;
    case "patient_disease":
      return (
        <>
          <Text color={colorSet.disease}>{content}</Text>
        </>
      );
    case "patient_medicine":
      return <Text color={colorSet.medication}>{content}</Text>;
    case "patient_blood_pressure":
      return (
        <Text color={colorSet.bloodPressure}>
          {content[0]}mmHg/{content[1]}mmHg
        </Text>
      );
    case "patient_blood_sugar":
      return `${content}mg/dL`;
    default:
      return `${content}`;
  }
};

const HeightDiv = styled.div`
  height: 50px;
`;

const renderTagByCase = ({ caseKey, content }: IrenderCaseByCase) => {
  switch (caseKey) {
    case "patient_disease":
      return <TagRenderer color={colorSet.disease} label={content} />;
    case "patient_medicine":
      return <TagRenderer color={colorSet.medication} label={content} />;
    case "patient_blood_pressure":
      return (
        <TagRenderer
          color={colorSet.bloodPressure}
          label={`${content[0]}mmHg/${content[1]}mmHg`}
        />
      );
    default:
      return null;
  }
};

const PatientInfoTableRow = ({ row, rowIndex }: PatientInfoTableRowProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleArrowClick = () => {
    setIsClicked((prevState: boolean) => !prevState);
  };

  return (
    <TR key={rowIndex} isClicked={isClicked}>
      {Columns.map((column) => (
        <TD key={column.accessor}>
          <Text font={Font.Regular}>
            {renderCaseByCase({
              caseKey: column.accessor,
              content: row[column.accessor],
            })}
          </Text>
          {isClicked && (
            <HeightDiv>
              {renderTagByCase({
                caseKey: column.accessor,
                content: row[column.accessor],
              })}
            </HeightDiv>
          )}
        </TD>
      ))}
      <TD>
        <TableArrowWrapper isClicked={isClicked} onClick={handleArrowClick}>
          {isClicked && <HeightDiv />}
          <TableArrow size="24px" color={colorSet.gray40} />
        </TableArrowWrapper>
      </TD>
    </TR>
  );
};

export default PatientInfoTableRow;
