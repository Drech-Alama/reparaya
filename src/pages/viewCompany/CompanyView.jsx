import { useParams } from "react-router-dom";
import ClientHeader from "../../components/ClientHeader";
import PromotionCard from "../../components/PromotionCard";

export default function CompanyView() {
    const { company } = useParams();
    const user = JSON.parse(localStorage.getItem("currentUser"));

    const promotions =
        JSON.parse(localStorage.getItem("promotions")) || [];

    const makeSlug = (text = "") =>
        text
            .toString()
            .trim()
            .replace(/\s+/g, "-")
            .toLowerCase();

    const companyData = promotions.find(
        (p) => p.company && makeSlug(p.company) === company
    );

    if (!companyData) {
        return (
            <>
                <ClientHeader user={user} />
                <div className="p-6">
                    <h2 className="text-xl font-bold">
                        Empresa no encontrada
                    </h2>
                </div>
            </>
        );
    }
    const goToWhatsapp = () => {
        if (!companyData.whatsapp) return;

        window.open(
            `https://wa.me/${companyData.whatsapp}`,
            "_blank"
        );
    };


    return (
<>
    {/* HEADER */}
    <ClientHeader user={user} />

    {/* HERO */}
    <section className="h-72 relative">
        <img
            src={companyData.image}
            alt={companyData.company}
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">
                {companyData.company}
            </h1>
        </div>
    </section>

    {/* CARD DE PROMOCIÓN */}
    <section className="p-6 max-w-5xl mx-auto">
        <div
            onClick={goToWhatsapp}
            className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex gap-4 items-center"
        >
            <img
                src={companyData.image}
                alt={companyData.title}
                className="w-32 h-32 object-cover rounded"
            />

            <div>
                <h3 className="text-xl font-bold">
                    {companyData.title}
                </h3>
                <p className="text-gray-600">
                    {companyData.description}
                </p>
                <p className="mt-2 text-green-600 font-semibold">
                    📲 Contactar por WhatsApp
                </p>
            </div>
        </div>
    </section>

    {/* SECCIÓN 1 – SOBRE LA EMPRESA */}
    <section className="bg-gray-50 py-46 px-6">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
                Soluciones pensadas para tu negocio
            </h2>
            <p className="text-gray-600 leading-relaxed">
                En <strong>{companyData.company}</strong> trabajamos con un enfoque
                profesional y personalizado para ayudar a las empresas a crecer,
                mejorar su presencia y conectar con más clientes de forma efectiva.
            </p>
        </div>
    </section>

    {/* SECCIÓN 2 – VALOR / DIFERENCIAL */}
    <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Experiencia</h3>
                <p className="text-gray-600">
                    Años de trabajo brindando soluciones confiables para empresas
                    de distintos rubros.
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Atención directa</h3>
                <p className="text-gray-600">
                    Comunicación rápida y directa vía WhatsApp para resolver tus
                    consultas al instante.
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">Resultados reales</h3>
                <p className="text-gray-600">
                    Nos enfocamos en ofrecer soluciones prácticas que generen valor
                    y resultados visibles.
                </p>
            </div>
        </div>
    </section>

    {/* FOOTER */}
<footer className="bg-[var(--color-principal)] text-white py-12">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* EMPRESA */}
        <div>
            <h4 className="text-xl font-bold mb-2">
                {companyData.company}
            </h4>
            <p className="text-sm">
                {companyData.description ||
                    "Brindamos soluciones profesionales para empresas que buscan crecer y destacar en el mercado."}
            </p>
        </div>

        {/* SERVICIOS */}
        <div>
            <h5 className="font-semibold mb-3">Servicios</h5>
            <ul className="space-y-1 text-sm">
                <li>✔ Atención personalizada</li>
                <li>✔ Soluciones empresariales</li>
                <li>✔ Soporte rápido</li>
                <li>✔ Resultados garantizados</li>
            </ul>
        </div>

        {/* PROMOCIÓN */}
        <div>
            <h5 className="font-semibold mb-3">Promoción</h5>
            <p className="text-sm">
                {companyData.title}
            </p>
            <p className="text-sm mt-2">
                📢 Consulta hoy y recibe una atención inmediata
            </p>
        </div>

        {/* CONTACTO */}
        <div>
            <h5 className="font-semibold mb-3">Contacto</h5>
            <p
                onClick={goToWhatsapp}
                className="cursor-pointer font-semibold hover:underline"
            >
                📲 WhatsApp
            </p>
            <p className="text-sm mt-1">
                {companyData.whatsapp}
            </p>
        </div>
    </div>

    {/* COPYRIGHT */}
    <div className="mt-10 text-center text-sm">
        © {new Date().getFullYear()} {companyData.company}. Todos los derechos reservados.
    </div>
</footer>

</>

    );
}
