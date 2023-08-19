import Tag from "src/atoms/tag/Tag";
import Text from "src/atoms/text/Text";
import MenuInfoTable from "src/molecule/table/menuInfoTable";
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
          <Text style={{ padding: "10px" }} size="1.5rem" font={Font.Bold}>
            2023.08.20. - Breakfast
          </Text>
          <div style={{ padding: "10px" }}>
            <Tag color="#FF288F">
              <Text color={colorSet.white} font={Font.Regular}>
                Diabetes
              </Text>
            </Tag>

            <Tag color="#FF4228">
              <Text color={colorSet.white} font={Font.Regular}>
                No Caffeine
              </Text>
            </Tag>
            <Tag color="#00B2FF">
              <Text color={colorSet.white} font={Font.Regular}>
                Low salt
              </Text>
            </Tag>
            <MenuInfoTable></MenuInfoTable>
          </div>
          <Tray></Tray>
        </div>
        <SelectMenu></SelectMenu>
      </div>
    </div>
  );
};

export default MakePage;
