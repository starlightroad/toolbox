import { useState } from "react";
import { fetchUtilityById } from "../data/utility";
import ResetButton from "../features/time-duration-calculator/components/reset-button";
import TimeForm from "../features/time-duration-calculator/components/time-form";
import ResultsCard from "../features/time-duration-calculator/components/results-card";
import useUnits from "../features/time-duration-calculator/hooks/use-units";
import ErrorMessage from "../components/error-message";

export default function TimeDurationCalculatorPage() {
  const utility = fetchUtilityById("ul-1")!;
  const pageTitle = utility.label;

  const [units] = useUnits();
  const showCalculations = units.milliseconds > 0;

  const [error, setError] = useState(false);

  return (
    <main className="py-8 sm:py-14">
      <article>
        <header>
          <h1 className="text-4xl font-semibold">{pageTitle}</h1>
          <p className="mt-2 mb-8 text-gray-500">{utility.description}</p>
        </header>
        <section>
          {error && (
            <ErrorMessage message="Each field must be in the following format: MM/DD/YYYY HH:SS" />
          )}
          <TimeForm onError={setError} />
        </section>
        <section>{showCalculations && <ResultsCard />}</section>
        <section>
          <div className="mt-4">{showCalculations && <ResetButton />}</div>
        </section>
      </article>
    </main>
  );
}
