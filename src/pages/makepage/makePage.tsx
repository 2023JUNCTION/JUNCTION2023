import Tag from "src/atoms/tag/Tag";
import Text from "src/atoms/text/Text";
import SelectMenu from "src/pages/makepage/selectMenu";
import Tray from "src/pages/makepage/tray";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";

const MakePage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "320px",
          }}
        >
          <Text size="1.5rem" font={Font.Bold}>
            2023.08.20. - Breakfast
          </Text>
          <Tag color="#FF288F">
            <Text color={colorSet.white} font={Font.Regular}>
              Diabetes
            </Text>
          </Tag>
          <Tag color="#FF288F">
            <Text color={colorSet.white} font={Font.Regular}>
              No Caffeine
            </Text>
          </Tag>
          <Tag color="#FF288F">
            <Text color={colorSet.white} font={Font.Regular}>
              Low salt
            </Text>
          </Tag>
          <Tray></Tray>
        </div>

        <SelectMenu></SelectMenu>
      </div>
    </div>
  );
};

export default MakePage;
