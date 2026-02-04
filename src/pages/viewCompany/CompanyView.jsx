import { useParams } from "react-router-dom";
import ClientHeader from "../../components/ClientHeader";
import GallerySlider from "../../components/GallerySlider";

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
            {/* <ClientHeader user={user} /> */}

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
                    className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col lg:flex-row gap-4 items-center"
                >
                    <img
                        src={companyData.image}
                        alt={companyData.title}
                        className="w-32 h-32 object-cover rounded"
                    />

                    <div className="text-center lg:text-left">
                        <h3 className="text-xl font-bold">
                            {companyData.title}
                        </h3>
                        <p className="text-gray-600">
                            {companyData.company}
                        </p>
                        <p className="text-gray-600 break-all">
                            {companyData.description}
                        </p>
                    </div>
                </div>
            </section>


            <section>
                <GallerySlider />
            </section>
            {/* SECCIÓN 1 – SOBRE LA EMPRESA */}
            <section className="bg-[var(--color-principal)] py-46 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl text-white font-bold mb-4">
                        En <strong>{companyData.company}</strong> tenemos soluciones pensadas para tu negocio
                    </h2>
                    <p className="text-white leading-relaxed">
                        Trabajamos con un enfoque
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
            <footer className="bg-[var(--color-principal)] text-white py-6">

                {/* COPYRIGHT */}
                <div className="mt-10 text-center text-sm">
                    © {new Date().getFullYear()} {companyData.company}. Todos los derechos reservados.
                </div>
            </footer>

        </>

    );
}
