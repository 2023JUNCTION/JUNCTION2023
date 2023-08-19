import { Outlet } from "react-router-dom";
import Flex from "src/atoms/containers/Flex";

import PageSide from "./PageSide";
// import useAuth from "src/hooks/useAuth";

const Layout = () => {
  // useAuth();

  return (
    <>
      <Flex width="100vw" height="100vh">
        <PageSide />
        <Outlet />
      </Flex>
    </>
  );
};

export default Layout;
