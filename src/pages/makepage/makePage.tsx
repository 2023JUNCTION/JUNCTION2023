import SelectMenu from "src/atoms/Button/component/selectMenu/selectMenu";
import Text from "src/atoms/Button/component/Text/text";
import Tray from "src/atoms/Button/component/tray/tray";
import Area from "src/atoms/containers/Area";

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
            <Text
            size="1.5rem"
            >2023.08.20. - Breakfast</Text>
            <Tray></Tray>
          </div>
          <SelectMenu></SelectMenu>
        </div>
      </Area>
    </>
  );
};

export default MakePage;
