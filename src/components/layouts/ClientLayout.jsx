import { Outlet } from "react-router-dom";
import ClientHeader from "../components/ClientHeader";

export default function ClientLayout() {
  return (
    <>
      <ClientHeader />
      <main className="pt-4">
        <Outlet />
      </main>
    </>
  );
}
