import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";

const MenuListCard = ({ content }: { content: string }) => {
  return (
    <div
      style={{
        maxWidth: "300px",
        padding: "15px 18px",
        borderRadius: "10px",
        border: `1px solid ${colorSet.gray30}`,
      }}
    >
      <Text
        size="16px"
        color={colorSet.black}
        font={Font.Medium}
        style={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          lineHeight: "30px",
          wordBreak: "break-word",
        }}
      >
        {content}
      </Text>
    </div>
  );
};

export default MenuListCard;
