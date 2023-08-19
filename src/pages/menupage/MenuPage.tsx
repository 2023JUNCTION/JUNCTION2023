import { ChangeDateArrow } from "src/assets/Icons";
import Area from "src/atoms/containers/Area";
import Flex from "src/atoms/containers/Flex";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";
import styled from "styled-components";

interface DateIconWrapperProps {
  right: boolean;
  onClick: () => void;
}

const DateIconWrapper = ({ right, onClick }: DateIconWrapperProps) => {
  return (
    <div
      style={{
        transform: right ? "rotate(180deg)" : "rotate(0deg)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <ChangeDateArrow size="40px" />
    </div>
  );
};

const SetDateBtn = styled.button`
  padding: 0.8rem 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${colorSet.gray10};
  margin-left: auto;
  cursor: pointer;
`;

const MenuPage = () => {
  const handleIndex = () => {
    console.log("handleIndex");
  };

  return (
    <Area>
      <Flex
        style={{
          margin: "0 auto",
        }}
        gap="20px"
        alignItems="center"
        justifyContent="center"
      >
        <DateIconWrapper right={true} onClick={handleIndex} />
        <Text font={Font.Bold} size="24px">
          2023.08.23
        </Text>
        <DateIconWrapper right={false} onClick={handleIndex} />
      </Flex>

      <SetDateBtn>
        <Text font={Font.Regular} color={colorSet.gray40}>
          Choose a date
        </Text>
      </SetDateBtn>
    </Area>
  );
};

export default MenuPage;
