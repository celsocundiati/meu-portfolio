import React, { useState } from "react";
import { CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon } from "@heroicons/react/24/outline";
import { SiPython } from "react-icons/si";

function Sobre() {

    const [novaCor, setNovaCor] = useState("box1");

    const links = [
    {
        id: "box1",
        icon: CodeBracketIcon,
        titulo: "WEB",
        desc: "DEVELOPMENT",
    },
    {
        id: "box2",
        icon: PaintBrushIcon,
        titulo: "UI / UX",
        desc: "DESIGNING",
    },
    {
        id: "box3",
        icon: DevicePhoneMobileIcon,
        titulo: "MOBILE",
        desc: "DEVELOPMENT",
    },
    {
        id: "box4",
        icon: SiPython,
        titulo: "WEB SCRAPING",
        desc: "WITH PYTHON",
    },
    ];

    function selecaoBox(secao){
        setNovaCor(secao)
    }

    function classLinkBox(secao){
        return `hover: hover:scale-105 transition-all duration-300 
        rounded-xl p-6 flex flex-col items-center justify-center text-center}
        ${novaCor === secao ? "bg-[#7562E0]" : "bg-[#343449]"}`;
    }

    function classLinkH4(){
        return `text-white font-bold text-lg`
    }

    function classLinkP(){
        return `text-white text-sm`
    }
    function classLinkIcon(){
        return `h-12 w-12 text-white mb-3`
    }

  return (
    <section id="sobre" className="text-white py-16 px-6 md:px-8">
      <div>

        {/* className="max-w-5xl mx-auto" */}

        <h2 className="text-3xl md:text-4xl font-bold text-[#7562E0] mb-4">
          About me:
        </h2>

        {/*Minha Descrição */}
        <p className="text-gray-300 leading-relaxed text-left md:text-justify mb-6">
          Olá, meu nome é <span className="text-white font-semibold">Celso Cundiati</span>,
          Sou Desenvolvedor Web Full Stack, UI Designer e Desenvolvedor Mobile. 
          Aprimorei minhas habilidades em Desenvolvimento Web e ganhei uma compreensão 
          básica dos princípios avançados de design de interface do usuário.
        </p>

        <p className="text-gray-300 leading-relaxed mb-10">
          Aqui estão as principais habilidades que tenho.
        </p>

        {/*Minha Experiência */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10">
          <h3 className="text-6xl md:text-7xl font-bold text-[#7562E0]">5+</h3>
          <p className="text-lg  md:text-xl font-medium text-left md:text-justify leading-relaxed">
            Anos de experiência. Especializado no Desenvolvimento de Softwares, 
            garantindo uma experiência na web perfeita para os usuários finais.
          </p>
        </div>

        {/* Cartões de habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Web Development, * UI/UX Design,  Mobile Development, Web Scraping*/}

            {links.map((box) => {
                const Icon = box.icon;
                return (
                    <div key={box.id} onClick={() => selecaoBox(box.id)} className={classLinkBox(box.id)}>
                        <Icon className={classLinkIcon()} />
                        <h4 className={classLinkH4()}>{box.titulo}</h4>
                        <p className={classLinkP()}>{box.desc}</p>
                    </div>
                );
            })}

        </div>
      </div>
    </section>
  );
}

export default Sobre;
