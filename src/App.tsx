import { Route, Routes } from "react-router";
import { ROUTES } from "./lib/constants";
import Layout from "./components/layout";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/404";
import TimeDurationCalculatorPage from "./pages/time-duration-calculator-page";
import RandomIdGeneratorPage from "./pages/random-id-generator-page";
import { UnitsProvider } from "./features/time-duration-calculator/providers/units-provider";
import { UUIDProvider } from "./features/random-id-generator/providers/uuid-provider";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={ROUTES.TIME_DURATION_CALLCULATOR}
          element={
            <UnitsProvider>
              <TimeDurationCalculatorPage />
            </UnitsProvider>
          }
        />
        <Route
          path={ROUTES.RANDOM_ID_GENERATOR}
          element={
            <UUIDProvider>
              <RandomIdGeneratorPage />
            </UUIDProvider>
          }
        />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
