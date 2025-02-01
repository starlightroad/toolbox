import { Link } from "react-router";
import { ContainerIcon } from "lucide-react";
import { ROUTES } from "../lib/constants";

export default function AppLogo() {
  return (
    <Link to={ROUTES.HOME} className="flex items-center gap-2 text-white">
      <ContainerIcon size={20} />
      <span className="text-sm font-medium">toolbox</span>
    </Link>
  );
}
