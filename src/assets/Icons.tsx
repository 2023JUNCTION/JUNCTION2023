interface IconProps {
  size?: React.CSSProperties["width"];
  color?: React.CSSProperties["color"];
  onClick?: () => void;
}

export const TableArrow = ({ size, color, onClick }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <path
        d="M10.9059 14.3L8.30593 11.7C7.98927 11.3833 7.91843 11.0208 8.09343 10.6125C8.26843 10.2042 8.58093 10 9.03093 10H14.1809C14.6309 10 14.9434 10.2042 15.1184 10.6125C15.2934 11.0208 15.2226 11.3833 14.9059 11.7L12.3059 14.3C12.2059 14.4 12.0976 14.475 11.9809 14.525C11.8643 14.575 11.7393 14.6 11.6059 14.6C11.4726 14.6 11.3476 14.575 11.2309 14.525C11.1143 14.475 11.0059 14.4 10.9059 14.3Z"
        fill={color}
      />
    </svg>
  );
};
