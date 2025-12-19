import Header from "../layout/Header.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />

      {/* espacio por header fixed */}
      <main className="">
        <Outlet />
      </main>
    </>
  );
}
