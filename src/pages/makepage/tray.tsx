import colorSet from "src/styles/colorSet";

import Button from "../../atoms/Button/Button";

const Tray = () => {
  return (
    <div>
      <div
        style={{
          borderRadius: "5%",
          padding: "20px",
          backgroundColor: colorSet.gray20,
          //boxShadow: "10px 10px 10px rgba(151, 151, 151, 0.3)",
        }}
      >
        <div
          style={{
            margin: "10px",
            gap: "10px",
          }}
        >
          <Button borderRadius={"30%"}></Button>
          <Button borderRadius={"30%"}></Button>
          <Button borderRadius={"30%"}></Button>
          <Button borderRadius={"30%"}></Button>
        </div>
        <div>
          <Button borderRadius={"20%"} width="350px" height="300px"></Button>
          <Button width="300px" height="300px"></Button>
        </div>
      </div>
    </div>
  );
};

export default Tray;
