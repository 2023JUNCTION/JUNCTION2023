import Area from "src/atoms/containers/Area";
import Text from "src/atoms/text/Text";
import SelectMenu from "src/pages/makepage/selectMenu";
import Tray from "src/pages/makepage/tray";

const MakePage = () => {
  return (
    <>
      <Area>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            width: "100vw",
          }}
        >
          <div>
            <Text size="1.5rem">2023.08.20. - Breakfast</Text>
            <Tray></Tray>
          </div>
          <SelectMenu></SelectMenu>
        </div>
      </Area>
    </>
  );
};

export default MakePage;
