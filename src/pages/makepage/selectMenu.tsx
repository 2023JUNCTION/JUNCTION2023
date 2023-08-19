import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";

import MenuSelect from "./menuSelect";

const SelectMenu = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        height: "100vh",
        backgroundColor: "#FAFAFA",
        boxShadow: "-10px 0px 10px rgba(151, 151, 151, 0.3)",
        margin: "30px",
      }}
    >
      <div
        style={{
          //backgroundColor: "#ffeab8",
          height: "50px",
          width: "100%",
        }}
      >
        <Text
          size={"1.5rem"}
          font={Font.Bold}
          style={{
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Select Menu
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuSelect width="100px" height="120px" borderRadius={"20%"}>
            <img
              width="100%"
              height="100%"
              src="public\foodImg\frame 371.png"
            ></img>
          </MenuSelect>
          <Text font={Font.Bold}>Jangjorim</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuSelect width="100px" height="120px" borderRadius={"20%"}>
            <img
              width="100%"
              height="100%"
              src="public\foodImg\Frame 371(1).png"
            ></img>
          </MenuSelect>
          <Text font={Font.Bold}>Fried-Tofu</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuSelect width="100px" height="120px" borderRadius={"20%"}>
            <img
              width="100%"
              height="100%"
              src="public\foodImg\Frame 371(2).png"
            ></img>
          </MenuSelect>
          <Text font={Font.Bold}>
            Stir-fried
            <br />
            anchovies
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuSelect width="100px" height="120px" borderRadius={"20%"}>
            <img
              width="35px"
              height="35px"
              src="public\foodImg\unselect.png"
            ></img>
          </MenuSelect>
          <Text font={Font.Bold}>Unselect</Text>
        </div>
      </div>
      <div
        style={{
          backgroundColor: colorSet.gray05,
          height: "50px",
          width: "100%",
        }}
      >
        <Text
          size={"1.5rem"}
          font={Font.Bold}
          style={{
            padding: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Nutrients of Caution
        </Text>
      </div>
      <div
        style={{
          width: "70%",
          padding: "15px",
          display: "flex",
          alignContent: "center",
          backgroundColor: "#DCFFE6",
          justifyContent: "space-between",
        }}
      >
        <Text color="#00E27B" font={Font.Medium}>
          Sodium
        </Text>
        <Text color="#00E27B" font={Font.Medium}>
          10mg
        </Text>
      </div>
      <div
        style={{
          width: "70%",
          padding: "15px",
          marginTop: "10px",
          display: "flex",
          alignContent: "center",
          backgroundColor: "#FFDCE0",
          justifyContent: "space-between",
        }}
      >
        <Text color="#FF2222" font={Font.Medium}>
          Sugars
        </Text>
        <Text color="#FF2222" font={Font.Medium}>
          8mg
        </Text>
      </div>
      <Text
        style={{ margin: "10px" }}
        size="0.8rem"
        color="#FF2222"
        font={Font.Medium}
      >
        ⚠ Be careful not to exceed 5g of sugar per serving
      </Text>
    </div>
  );
};

export default SelectMenu;
