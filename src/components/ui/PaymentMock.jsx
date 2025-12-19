import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api";

export default function PaymentMock({ userData }) {
  const navigate = useNavigate();

  const pagar = async () => {
    console.log("Datos enviados:", userData);

    await registerUser(userData);

    localStorage.setItem("auth", "true");
    navigate("/home");
  };

  return (
    <button type="button" onClick={pagar}>
      Pagar ahora
    </button>
  );
}
