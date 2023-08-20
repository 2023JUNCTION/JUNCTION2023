import { Provider } from "jotai";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Homepage from "./pages/homepage/homepage";
import MakePage from "./pages/makepage/makePage";
import MenuPage from "./pages/menupage/MenuPage";
import Playground from "./pages/playground/Playground";
import GlobalStyle from "./styles/globalStyles";

const App = () => {
  return (
    <Provider>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/pl" element={<Playground />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/menu_legacy" element={<MenuPage />} />
          <Route path="/menu" element={<MakePage />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;
