interface TagProps {
  color: React.CSSProperties["color"];
  children: React.ReactNode;
}

const Tag = ({ color, children }: TagProps) => {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "0.5rem",
        borderRadius: "5px",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
};

export default Tag;
