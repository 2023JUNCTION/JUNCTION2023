import Flex from "src/atoms/containers/Flex";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import MenuInfoTable from "src/pages/makepage/menuInfoTable";
import Tray from "src/pages/makepage/tray";
import Font from "src/styles/font";

import MenuComposer from "./MenuComposer";
import TagSelect from "./TagSelect";

const MakePage = () => {
  return (
    <>
      <Spacer width="250px" />
      <Flex
        justifyContent="space-between"
        width="calc(100vw - 250px)"
        style={{
          boxSizing: "border-box",
          paddingLeft: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Text size="1.5rem" font={Font.Medium}>
              2023.08.20. - Breakfast
            </Text>

            <Spacer height="10px" />

            <TagSelect />

            <MenuInfoTable></MenuInfoTable>

            <Tray></Tray>
          </div>
        </div>
        <MenuComposer />
      </Flex>
    </>
  );
};

export default MakePage;
