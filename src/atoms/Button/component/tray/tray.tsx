import Button from "../../Button";

const Tray = () => {
  return (
    <div>
      <div
        style={{
          borderRadius: "5%",
          padding: "20px",
          //backgroundColor: "#ececec",
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
          <Button width="350px" height="350px"></Button>
          <Button width="350px" height="350px"></Button>
        </div>
      </div>
    </div>
  );
};

export default Tray;