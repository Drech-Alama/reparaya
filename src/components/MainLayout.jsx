import ClientHeader from "../components/ClientHeader";
import TechnicianHeader from "../components/TechnicianHeader";

export default function MainLayout({ children }) {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    // Vistas públicas → sin header
    if (!user) return children;

    return (
        <>
            {user.role === "tecnico" ? (
                <TechnicianHeader user={user} />
            ) : (
                <ClientHeader user={user} />
            )}
            {children}
        </>
    );
}
