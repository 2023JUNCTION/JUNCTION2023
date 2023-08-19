import { Outlet } from "react-router-dom";
// import useAuth from "src/hooks/useAuth";

const Layout = () => {
  // useAuth();

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
