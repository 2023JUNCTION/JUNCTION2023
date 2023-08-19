import Font from "src/styles/font";

import MenuSelect from "../../menuSelect";
import Text from "../Text/text";

const SelectMenu = () => {
  return (
    <div
      style={{
        borderRadius: "1%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
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
        <MenuSelect></MenuSelect>
        <MenuSelect></MenuSelect>
      </div>
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
          Nutrients
        </Text>
      </div>
      <div
        style={{
          width: "70%",
          padding: "10px",
          display: "flex",
          alignContent: "center",
          backgroundColor: "#F1F1F1",
          justifyContent: "space-between",
        }}
      >
        <Text font={Font.Medium}>Salt</Text>
        <Text font={Font.Medium}>mg</Text>
      </div>
      <div
        style={{
          width: "70%",
          padding: "10px",
          marginTop: "10px",
          display: "flex",
          alignContent: "center",
          backgroundColor: "#F1F1F1",
          justifyContent: "space-between",
        }}
      >
        <Text font={Font.Medium}>Sugar</Text>
        <Text font={Font.Medium}>mg</Text>
      </div>
      <div
        style={{
          width: "70%",
          padding: "10px",
          marginTop: "10px",
          display: "flex",
          alignContent: "center",
          backgroundColor: "#F1F1F1",
          justifyContent: "space-between",
        }}
      >
        <Text font={Font.Medium}>Amount</Text>
        <Text font={Font.Medium}>g</Text>
      </div>
    </div>
  );
};

export default SelectMenu;
