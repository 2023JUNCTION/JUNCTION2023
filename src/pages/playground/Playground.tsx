import DotTag from "src/atoms/tag/DotTag";
import colorSet from "src/styles/colorSet";

import MenuListCard from "../menupage/MenuListCard";

const Playground = () => {
  return (
    <div style={{ position: "absolute", right: "0px" }}>
      <DotTag color={colorSet.disease} label="diabetes" />
      <MenuListCard content="Brown rice · Soybean Paste Soup · White Kimchi · Bellflower Root Salad · Bean Sprouts · Jangjorim" />
    </div>
  );
};

export default Playground;
