import "./App.css";

import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Homepage from "./pages/homepage/homepage";
import Playground from "./pages/playground/Playground";
import GlobalStyle from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/pl" element={<Playground />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
