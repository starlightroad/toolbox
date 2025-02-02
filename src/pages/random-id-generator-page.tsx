import { useState } from "react";
import ErrorMessage from "../components/error-message";
import { fetchUtilityById } from "../data/utility";
import GenerateIdForm from "../features/random-id-generator/components/generate-id-form";
import GeneratedIdsCard from "../features/random-id-generator/components/generated-ids-card";
import type { Metadata } from "../lib/definitions";
import { APP_METADATA } from "../lib/constants";
import PageMetadata from "../components/page-metadata";

const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RandomIdGeneratorPage() {
  const utility = fetchUtilityById("ul-2")!;
  const pageTitle = utility.label;

  const [error, setError] = useState(false);

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
          {error && <ErrorMessage message="Enter a number between 1 and 50." />}
          <section className="grid gap-4 md:grid-cols-3">
            <GenerateIdForm setError={setError} />
            <GeneratedIdsCard />
          </section>
        </article>
      </main>
    </>
  );
}
