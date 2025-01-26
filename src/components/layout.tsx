import { Outlet } from "react-router";
import Container from "./container";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
