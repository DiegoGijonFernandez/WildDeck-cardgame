import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { CollectionPage } from "./pages/CollectionPage";
import { CardDetailPage } from "./pages/CardDetailPage";
import { QuizPage } from "./pages/QuizPage";

import { AppLayout } from "./components/layout/AppLayout";
import { SimpleLayout } from "./components/layout/SimpleLayout";
import { UserProfile } from "./pages/UserProfile"

const App = () => {
  return (
    <Routes>

      {/* Públicas */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Collection (CON sidebar) */}
      <Route element={<AppLayout />}>
        <Route path="/collection" element={<CollectionPage />} />
      </Route>

      {/* Sin sidebar */}
      <Route element={<SimpleLayout />}>
        <Route path="/card/:id" element={<CardDetailPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Route >

    </Routes >
  );
};

export default App;
