// Modal.jsx
import { useNavigate } from "react-router-dom";

const API_URL =
  "https://script.google.com/macros/s/AKfycbwo-L2IIVep9Jj7U45N_-pS67lJ6XCFwKWOLDRMmlHQ5RFoPB8gxH2lY0YLqDftVTxz/exec";

export default function ModalMembership({ data }) {
  const navigate = useNavigate();

  const guardarYEntrar = async () => {
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        ...data,
        type: "register",
      }),
    });

    localStorage.setItem("auth", "true");
    navigate("/home");
  };

  return (
    <div style={{ background: "#00000088", position: "fixed", inset: 0 }}>
      <div style={{ background: "#fff", padding: 20 }}>
        <h2>Membresía mensual</h2>
        <p>Precio: S/ 3.00</p>

        <button type="button" onClick={guardarYEntrar}>
          Ir a inicio
        </button>
      </div>
    </div>
  );
}
