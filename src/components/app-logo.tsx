import { Link } from "react-router";
import { ROUTES } from "../lib/constants";

export default function AppLogo() {
  return (
    <Link to={ROUTES.HOME} className="flex items-center gap-2 text-white">
      <img src="/favicon-32x32.png" alt="Website logo" width={20} height={20} />
      <span className="text-sm font-medium">toolbox</span>
    </Link>
  );
}
