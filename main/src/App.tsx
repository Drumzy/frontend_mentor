import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Content";
import QRCComponent from "./components/frontend_mentor_components/qr_code_components/qr_code";
import NewsHomePage from "./components/frontend_mentor_components/news_homepage/news_hp";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route index element={<LandingPage />} />
        <Route path="qr_code" element={<QRCComponent />} />
        <Route path="news_page" element={<NewsHomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
