import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar/AppBar";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CamperPage from "./pages/CamperPage/CamperPage";
import ReviewsSection from "./components/Reviews/ReviewsSection/ReviewsSection";

const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:camperId" element={<CamperPage />}>
          <Route path="reviews" element={<ReviewsSection />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
