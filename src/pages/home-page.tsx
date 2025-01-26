import { Link } from "react-router";
import { ArrowUpRightIcon } from "lucide-react";
import { fetchAllUtilities } from "../data/utility";

export default function HomePage() {
  return (
    <main className="py-8 sm:py-14">
      <article>
        <header>
          <h1 className="text-4xl font-semibold">Toolbox</h1>
          <p className="mt-2 mb-8 text-gray-500">
            A collection of web-based utilities I have developed.
          </p>
        </header>
        <section>
          <UtilitiesList />
        </section>
      </article>
    </main>
  );
}

function UtilitiesList() {
  const utilities = fetchAllUtilities();

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {utilities.map((listItem) => {
        return (
          <li
            key={listItem.id}
            className="group rounded-xl border border-gray-200 shadow-sm transition-colors hover:border-gray-300 hover:shadow-md"
          >
            <Link to={listItem.href} className="block p-6">
              <h2 className="mb-2 text-xl font-medium text-gray-900">
                {listItem.label}
              </h2>
              <p className="text-sm text-gray-500">{listItem.description}</p>
              <div className="pt-6">
                <div className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-amber-300">
                  <ArrowUpRightIcon size={20} />
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
