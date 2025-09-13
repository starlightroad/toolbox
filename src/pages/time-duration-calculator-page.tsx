import { useState } from "react";
import { fetchUtilityById } from "../data/utility";
import ResetButton from "../features/time-duration-calculator/components/reset-button";
import TimeForm from "../features/time-duration-calculator/components/time-form";
import ResultsCard from "../features/time-duration-calculator/components/results-card";
import useUnits from "../features/time-duration-calculator/hooks/use-units";
import ErrorMessage from "../components/error-message";
import type { Metadata } from "../lib/definitions";
import { APP_METADATA } from "../lib/constants";
import PageMetadata from "../components/page-metadata";

const metadata: Metadata = {
  title: "",
  description: "",
};

export default function TimeDurationCalculatorPage() {
  const utility = fetchUtilityById("ul-1")!;
  const pageTitle = utility.label;

  const { units } = useUnits();
  const showCalculations = units.milliseconds > 0;

  const [error, setError] = useState(false);
  const errorMessage =
    "Failed to perform calculation. Make sure each field is in the following formats: MM/DD/YYYY HH:SS or HH:SS or HH:SS AM|PM.";

  // Update page metadata
  metadata.title = `${pageTitle} - ${APP_METADATA.NAME}`;
  metadata.description = utility.description;

  return (
    <>
      <PageMetadata title={metadata.title} description={metadata.description} />
      <main className="py-8 sm:py-14">
        <article>
          <header>
            <h1 className="text-4xl font-semibold">{pageTitle}</h1>
            <p className="mt-2 mb-8 text-gray-500">{utility.description}</p>
          </header>
          <section>
            {error && <ErrorMessage message={errorMessage} />}
            <TimeForm onError={setError} />
          </section>
          <section>{showCalculations && <ResultsCard />}</section>
          <section>
            <div className="mt-4">{showCalculations && <ResetButton />}</div>
          </section>
        </article>
      </main>
    </>
  );
}
