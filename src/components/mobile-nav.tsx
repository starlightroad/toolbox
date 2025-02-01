import { GITHUB_REPO_URL } from "../lib/constants";

export default function MobileNav() {
  return (
    <nav className="absolute top-14 left-0 z-1 h-[calc(100%-56px)] w-full bg-white py-4 sm:hidden">
      <ul className="flex flex-col gap-1">
        <li>
          <a
            href="mailto:hello@gerardoortiz.dev"
            rel="noreferrer"
            className="block w-full rounded-md px-4 py-3 font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            Feedback
          </a>
        </li>
        <li>
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="block w-full rounded-md px-4 py-3 font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
