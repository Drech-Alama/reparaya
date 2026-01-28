import ClientHeader from "../../components/ClientHeader";

export default function Home() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (!currentUser) return null;

  // Buscar el usuario completo (con foto)
  const fullUser = users.find(u => u.email === currentUser.email);

  return (
    <div className="min-h-screen bg-gray-100">
      <ClientHeader user={fullUser || currentUser} />
    </div>
  );
}