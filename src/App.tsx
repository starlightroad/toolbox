import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import HomePage from "./pages/home-page";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
