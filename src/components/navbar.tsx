import { Link } from "react-router";
import { ContainerIcon, MoreVerticalIcon, X } from "lucide-react";
import githubLogo from "../assets/github.svg";
import { DEVELOPER_EMAIL, GITHUB_REPO_URL } from "../lib/constants";
import MobileNav from "./mobile-nav";
import useDisclosure from "../hooks/use-disclosure";

export default function Navbar() {
  const { open, toggleOpen } = useDisclosure();

  const onToggleMobileNav = () => {
    toggleOpen();
  };

  const feedbackLink = `mailto:${DEVELOPER_EMAIL}`;

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
            <button
              onClick={onToggleMobileNav}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-white/10"
            >
              {open && <X size={18} className="text-white" />}
              {!open && <MoreVerticalIcon size={18} className="text-white" />}
            </button>
            {open && <MobileNav />}
          </li>
          <li className="col-span-2 hidden sm:list-item">
            <ul className="flex items-center gap-2">
              <li>
                <a
                  href={feedbackLink}
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
