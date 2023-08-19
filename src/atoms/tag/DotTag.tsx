import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";

import Flex from "../containers/Flex";
import Text from "../text/Text";

interface TagProps {
  color: React.CSSProperties["color"];
  label: string;
}

const DotTag = ({ color, label }: TagProps) => {
  return (
    <Flex
      style={{
        backgroundColor: colorSet.gray10,
        padding: "0.5rem 1rem",
        borderRadius: "100px",
      }}
      alignItems="center"
      gap="10px"
    >
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "100%",
          backgroundColor: color,
        }}
      ></div>
      <Text font={Font.Medium} size="16px" color={colorSet.gray50}>
        {label}
      </Text>
    </Flex>
  );
};

export default DotTag;
