import { Mail, Phone, MapPin } from "lucide-react";

function Card({ title, children }) {
  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p>{children}</p>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-blue-900 text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold">ASEPSA</h1>
          <nav className="space-x-4 mt-2 md:mt-0">
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#produtos" className="hover:underline">Produtos</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <section className="bg-gray-100 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Excelência em campos cirúrgicos oftalmológicos</h2>
          <p className="text-lg mb-6">Produtos estéreis, seguros e prontos para otimizar o dia a dia do centro cirúrgico.</p>
          <a href="#contato" className="inline-block bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800">Fale Conosco</a>
        </div>
      </section>

      <section id="sobre" className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Sobre a ASEPSA</h3>
          <p>A ASEPSA é especializada na fabricação e fornecimento de campos cirúrgicos oftalmológicos estéreis, com foco em segurança, praticidade e performance nas salas cirúrgicas.</p>
        </div>
      </section>

      <section id="produtos" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Nossos Produtos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Campo de Mesa Estéril">
              Ideal para cobrir superfícies de trabalho em salas cirúrgicas, garantindo esterilidade e organização.
            </Card>
            <Card title="Campo Cirúrgico para Catarata">
              Cobertura estéril completa para cirurgias de catarata, com conforto e segurança.
            </Card>
            <Card title="Campo Cirúrgico para LASIK">
              Design funcional para procedimentos refrativos com adaptação ao campo operatório.
            </Card>
            <Card title="Outros Campos Personalizados">
              Campos sob medida para diversas técnicas e equipamentos oftalmológicos.
            </Card>
          </div>
        </div>
      </section>

      <section id="contato" className="py-16 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Fale Conosco</h3>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2"><Phone className="w-5 h-5" /><span>(11) 99999-9999</span></div>
            <div className="flex items-center space-x-2"><Mail className="w-5 h-5" /><span>contato@asepsa.com.br</span></div>
            <div className="flex items-center space-x-2"><MapPin className="w-5 h-5" /><span>Atibaia, SP - Brasil</span></div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-4 text-center">
        <p className="text-sm">&copy; 2025 ASEPSA. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}