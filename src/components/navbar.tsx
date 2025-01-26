import { Link } from "react-router";
import { ContainerIcon, MoreVerticalIcon } from "lucide-react";
import githubLogo from "../assets/github.svg";
import { GITHUB_REPO_URL } from "../lib/constants";

export default function Navbar() {
  return (
    <header className="h-14 bg-gray-950 px-5">
      <nav className="h-full">
        <ul className="flex h-full items-center justify-between">
          <li>
            <Link to="/" className="flex items-center gap-2 text-white">
              <ContainerIcon size={20} />
              <span className="text-sm font-medium">toolbox</span>
            </Link>
          </li>
          <li className="sm:hidden">
            <button className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-white/10">
              <MoreVerticalIcon size={18} className="text-white" />
            </button>
          </li>
          <li className="col-span-2 hidden sm:list-item">
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href="mailto:hello@gerardoortiz.dev"
                  rel="noreferrer"
                  className="block rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-white/90"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-white/10"
                >
                  <img
                    src={githubLogo}
                    alt="See GitHub repo"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
