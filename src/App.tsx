import { Route, Routes } from "react-router";
import { ROUTES } from "./lib/constants";
import Layout from "./components/layout";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/404";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
