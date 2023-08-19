import "./App.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Homepage from "./pages/homepage/homepage";
import GlobalStyle from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
