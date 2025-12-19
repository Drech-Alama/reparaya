export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">Página no encontrada</p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
