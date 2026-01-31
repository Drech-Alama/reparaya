import TechnicianHeader from "../../components/TechnicianHeader";
import { useState } from "react";
import TechnicianCard from "../../components/TechnicianCard";
import PromotionCard from "../../components/PromotionCard";
import HistorialCard from "../../components/HistorialCard";

export default function Dashboard() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const fullUser = users.find(u => u.email === currentUser.email);

  // Data de Técnicos
  const [form, setForm] = useState({
    company: "",
    technicianName: "",
    address: "",
    whatsapp: "",
    image: null,
  });

  // Datos de tabla de Historial
  const [maintenanceForm, setMaintenanceForm] = useState({
  date: "",
  workshop: "",
  problem: "",
  status: "Pendiente",
});

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSave = () => {
    const technicians =
      JSON.parse(localStorage.getItem("technicians")) || [];

    technicians.push(form);
    localStorage.setItem("technicians", JSON.stringify(technicians));

    alert("Tarjeta creada ✅");
  };

  // Data Promociones
  const [promoForm, setPromoForm] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [promoPreview, setPromoPreview] = useState(null);

  const handlePromoChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        setPromoForm({ ...promoForm, image: reader.result });
        setPromoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPromoForm({ ...promoForm, [name]: value });
    }
  };

  const handlePromoSave = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      alert("Debes iniciar sesión");
      return;
    }

    if (!promoForm.title || !promoForm.description || !promoForm.image) {
      alert("Completa todos los campos");
      return;
    }

    const promotions =
      JSON.parse(localStorage.getItem("promotions")) || [];

    promotions.push({
      ...promoForm,
      technicianEmail: currentUser.email,
      whatsapp: fullUser?.whatsapp || form.whatsapp,
      id: Date.now(),
    });

    localStorage.setItem("promotions", JSON.stringify(promotions));

    setPromoForm({ title: "", description: "", image: null });
    setPromoPreview(null);

    alert("Promoción creada 🎉");
  };

  // Datos de Tabla historial
  const handleMaintenanceChange = (e) => {
  setMaintenanceForm({
    ...maintenanceForm,
    [e.target.name]: e.target.value,
  });
};

const handleMaintenanceSave = () => {
  if (
    !maintenanceForm.date ||
    !maintenanceForm.workshop ||
    !maintenanceForm.problem
  ) {
    alert("Completa todos los campos");
    return;
  }

  const historial = JSON.parse(localStorage.getItem("historial")) || [];

  historial.push({
    ...maintenanceForm,
    id: Date.now(),
    technicianEmail: fullUser?.email || currentUser.email,
  });

  localStorage.setItem("historial", JSON.stringify(historial));

  setMaintenanceForm({
    date: "",
    workshop: "",
    problem: "",
    status: "Pendiente",
  });

  alert("Mantenimiento registrado ✅");
};


  return (
    <>
      <TechnicianHeader user={fullUser || currentUser} />
      {/* contenido del técnico */}
      {/* Formulario Técnicos */}
      <div className="grid md:grid-cols-2 gap-8 p-6">
        {/* FORM */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Perfil del Técnico</h2>

          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="mb-3"
          />

          <input
            name="company"
            placeholder="Nombre de la empresa"
            onChange={handleChange}
            className="input"
          />
          <input
            name="technicianName"
            placeholder="Nombre del técnico"
            onChange={handleChange}
            className="input"
          />
          <input
            name="address"
            placeholder="Dirección del local"
            onChange={handleChange}
            className="input"
          />
          <input
            name="whatsapp"
            placeholder="WhatsApp (51999999999)"
            onChange={handleChange}
            className="input"
          />

          <button
            onClick={handleSave}
            className="mt-4 w-full bg-[var(--color-principal)] text-white py-2 rounded"
          >
            Guardar
          </button>
        </div>

        {/* PREVIEW */}
        <div>
          <h2 className="font-bold mb-3">Previsualización</h2>

          {form.company && (
            <TechnicianCard
              tech={{
                ...form,
                image: preview || "https://via.placeholder.com/150",
              }}
            />
          )}
        </div>
      </div>
      {/* Formulario Promociones */}

      <div className="grid md:grid-cols-2 gap-8 p-6 mt-10">
        {/* FORM */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Crear Promoción</h2>

          <input
            type="file"
            name="image"
            onChange={handlePromoChange}
            className="mb-3"
          />

          <input
            name="title"
            placeholder="Nombre de la promoción"
            value={promoForm.title}
            onChange={handlePromoChange}
            className="input"
          />

          <textarea
            name="description"
            placeholder="Descripción de la promoción"
            value={promoForm.description}
            onChange={handlePromoChange}
            className="input h-24"
          />

          <button
            onClick={handlePromoSave}
            className="mt-4 w-full bg-[var(--color-principal)] text-white py-2 rounded"
          >
            Guardar promoción
          </button>
        </div>

        {/* PREVIEW */}
        <div>
          <h2 className="font-bold mb-3">Previsualización</h2>

          {promoForm.title && (
            <PromotionCard
              promo={{
                ...promoForm,
                image: promoPreview || "/placeholder-promo.png",
              }}
            />
          )}
        </div>
      </div>

      {/* Formulario de Tabla Historial */}
      {/* FORMULARIO HISTORIAL DE MANTENIMIENTO */}
<div className="grid md:grid-cols-2 gap-8 p-6 mt-10">
  {/* FORMULARIO */}
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-bold mb-4">
      Registrar Mantenimiento
    </h2>

    <input
      type="date"
      name="date"
      value={maintenanceForm.date}
      onChange={handleMaintenanceChange}
      className="input"
    />

    <input
      type="text"
      name="workshop"
      placeholder="Taller"
      value={maintenanceForm.workshop}
      onChange={handleMaintenanceChange}
      className="input"
    />

    <textarea
      name="problem"
      placeholder="Problema del celular"
      value={maintenanceForm.problem}
      onChange={handleMaintenanceChange}
      className="input h-24"
    />

    <select
      name="status"
      value={maintenanceForm.status}
      onChange={handleMaintenanceChange}
      className="input"
    >
      <option>Pendiente</option>
      <option>En proceso</option>
      <option>Reparado</option>
    </select>

    <button
      onClick={handleMaintenanceSave}
      className="mt-4 w-full bg-[var(--color-principal)] text-white py-2 rounded"
    >
      Guardar mantenimiento
    </button>
  </div>

  {/* PREVISUALIZACIÓN */}
  <div>
    <h2 className="font-bold mb-3">
      Previsualización
    </h2>

    <HistorialCard item={maintenanceForm} />
  </div>
</div>



    </>
  );
}