import { Link, useParams } from "react-router";
import Code from "../components/ui/code";

export default function NotFoundPage() {
  const params = useParams();
  const unknownRoute = params["*"];

  return (
    <main className="py-8 sm:py-14">
      <article>
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 mb-8 text-sm text-gray-500">
          The page <Code>{unknownRoute}</Code> could not be found.
        </p>
        <Link
          to="/"
          className="inline-block rounded-md bg-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-300"
        >
          Back to Home
        </Link>
      </article>
    </main>
  );
}
