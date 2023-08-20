import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Group, Home, Menu, Profile, Settings } from "src/assets/Icons";
import { Logo } from "src/assets/Logo";
import Flex from "src/atoms/containers/Flex";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/font";

const menuNav = [
  {
    label: "Home",
    icon: <Home color={colorSet.gray35} size="40px" />,
    goto: "/",
  },
  {
    label: "Group",
    icon: <Group color={colorSet.gray35} size="40px" />,
    goto: "/group",
  },
  {
    label: "Menu",
    icon: <Menu color={colorSet.gray35} size="40px" />,
    goto: "/menu",
  },
  {
    label: "Settings",
    icon: <Settings color={colorSet.gray35} size="40px" />,
    goto: "/settings",
  },
];

const PageSide = () => {
  const navigator = useNavigate();
  const location = useLocation();

  interface MenuBtnProps {
    label: string;
    icon: JSX.Element;
    goto: string;
    isActive: boolean;
  }

  const MenuBtn = ({ label, icon, goto, isActive }: MenuBtnProps) => {
    const iconWithColor = React.cloneElement(icon, {
      color: isActive ? colorSet.primary : colorSet.gray35,
    });

    return (
      <Flex
        gap="10px"
        alignItems="center"
        onClick={() => {
          navigator(goto);
        }}
        style={{
          cursor: "pointer",
        }}
      >
        {iconWithColor}
        <Text
          font={Font.Bold}
          color={isActive ? colorSet.primary : colorSet.gray35}
          size="20px"
        >
          {label}
        </Text>
      </Flex>
    );
  };

  return (
    <Flex
      width="250px"
      height="100vh"
      style={{
        backgroundColor: colorSet.gray10,
        boxSizing: "border-box",
        paddingLeft: "30px",
        paddingTop: "50px",
        paddingBottom: "50px",
        position: "fixed",
      }}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex flexDirection="column" gap="36px">
        <Logo size="180px" />
        {menuNav.map((menu) => (
          <MenuBtn
            {...menu}
            key={menu.label}
            isActive={menu.goto === location.pathname}
          />
        ))}
      </Flex>

      <Flex gap="10px" alignItems="center">
        <Profile size="40px" color={colorSet.gray40} />
        <Text font={Font.Regular} color={colorSet.gray40} size="20px">
          Dietitian
        </Text>
      </Flex>
    </Flex>
  );
};

export default PageSide;
