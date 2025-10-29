import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon, PencilIcon, ServerIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon, CubeIcon } from "@heroicons/react/24/outline";

function Servicos() {
  const servicos = [
    {
      id: 1,
      icon: <PencilIcon className="w-12 h-12 text-white" />,
      title: "UI & UX DESIGNING",
      desc: "Eu crio belas interfaces da web com Figma e Adobe XD",
    },
    {
      id: 2,
      icon: <CodeBracketIcon className="w-12 h-12 text-white" />,
      title: "WEB DEVELOPMENT",
      desc: "Eu crio belas interfaces com frammeworks como React.js + Vite, Tailwind e Bootstrap",
    },
    {
      id: 3,
      icon: <DevicePhoneMobileIcon className="w-12 h-12 text-white" />,
      title: "MOBILE DEVELOPMENT",
      desc: "Eu sou um desenvolvedor móvel especialista. Tenho experiência usando Flutter e React Native.",
    },
    {
      id: 4,
      icon: <ServerIcon className="w-12 h-12 text-white" />,
      title: "VERSION CONTROL",
      desc: "Posso usar bem os sistemas de controle de versão, o Git e o Mercurial são minha ferramenta preferida",
    },
    {
      id: 5,
      icon: <CubeIcon className="w-12 h-12 text-white" />,
      title: "NPM AND NODEJS",
      desc: "Eu tenho compreensão do NPM. Também posso desenvolver aplicações de uso geral com NodeJS",
    },
    {
      id: 6,
      icon: <GlobeAltIcon className="w-12 h-12 text-white" />,
      title: "WEB SCRAPING",
      desc: "Posso coletar conteúdo e dados da Internet e manipular e analisar conforme necessário.",
    },
  ];

  return (
    <section className="min-h-screen py-16 px-8">

        
        <h2 className="text-3xl md:text-4xl font-bold text-[#7562E0] mb-8">
          Os serviços que eu ofereço:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((srv) => (
            <div
                key={srv.id}
                className="border border-[#7d5fff] rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-300 bg-transparent"
            >
                <div className="flex justify-center mb-4">{srv.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{srv.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{srv.desc}</p>
            </div>
            ))}
        </div>
    </section>
  );
}

export default  Servicos;
