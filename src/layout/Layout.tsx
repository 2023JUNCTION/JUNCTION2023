import { Outlet } from "react-router-dom";
import Spacer from "src/atoms/spacer/Spacer";
// import useAuth from "src/hooks/useAuth";

const Layout = () => {
  // useAuth();

  return (
    <div>
      <Outlet />

      <Spacer height={"300px"} />
    </div>
  );
};

export default Layout;
