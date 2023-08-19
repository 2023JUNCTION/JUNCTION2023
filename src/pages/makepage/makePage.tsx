import SelectMenu from "src/atoms/Button/component/selectMenu/selectMenu";
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
          <Tray></Tray>
          <SelectMenu></SelectMenu>
        </div>
      </Area>
    </>
  );
};

export default MakePage;
