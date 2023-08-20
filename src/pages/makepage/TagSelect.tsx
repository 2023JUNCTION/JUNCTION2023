import { useState } from "react";
import { Done } from "src/assets/Icons";
import Flex from "src/atoms/containers/Flex";
import Tag from "src/atoms/tag/Tag";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";

interface ToggleTagProps {
  label: string;
  onClick: () => void;
  isClicked?: boolean;
  color: string;
}

const ToggleTag = ({ label, onClick, color, isClicked }: ToggleTagProps) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <Tag color={isClicked ? color : `${color}50`}>
        <Flex alignItems="center" gap="5px">
          <Text color={colorSet.white} font={Font.Regular}>
            {label}
          </Text>
          {isClicked && <Done size="18px" color={colorSet.white} />}
        </Flex>
      </Tag>
    </div>
  );
};

const TagSelect = () => {
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false]);
  const handleClick = (index: number) => {
    const newIsClicked = [...isClicked];
    newIsClicked[index] = !newIsClicked[index];
    setIsClicked(newIsClicked);
  };

  return (
    <Flex gap="10px">
      <ToggleTag
        label="Diabetes"
        color={colorSet.disease}
        onClick={() => {
          handleClick(0);
        }}
        isClicked={isClicked[0]}
      />
      <ToggleTag
        label="No Caffeine"
        color={colorSet.medication}
        onClick={() => {
          handleClick(1);
        }}
        isClicked={isClicked[1]}
      />
      <ToggleTag
        label="Low salt"
        color={colorSet.bloodPressure}
        onClick={() => {
          handleClick(2);
        }}
        isClicked={isClicked[2]}
      />
    </Flex>
  );
};

export default TagSelect;
