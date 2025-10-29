import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Cabecalho() {

  const [ativo, setAtivo] = useState("inicio");
  const [menuAberto, setMenuAberto] = useState(false); // controla menu mobile

  function classeLink(secao) {
    return `text-base md:text-xl font-medium transition-all hover:text-[#7562e086] ${
      ativo === secao ? "text-[#7562E0]" : "text-white"
    }`;
  }

  function selecionarSecao(secao) {
    setAtivo(secao);
    setMenuAberto(false); // fecha menu mobile ao clicar hover:text-[#7562E0]
  }

  const links = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "projectos", label: "Projectos" },
    { id: "contacto", label: "Contacto" },
  ];

  return (

    <section>
          
      <div className="bg-[#181824] flex justify-between items-center w-full py-4 px-8 top-0 fixed shadow-md z-1">
        <h1 className="text-lg md:text-2xl font-bold text-[#7562E0]">Celso Cundiati</h1>

        {/* Menu normal */}
        <nav className="hidden md:flex gap-6">

          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => selecionarSecao(link.id)} className={classeLink(link.id)} >
              {link.label}
            </a>
          ))}
          
        </nav>

        {/* Hamburger para mobile */}
            <div className="md:hidden">

              <button onClick={() => setMenuAberto(!menuAberto)}>
              {menuAberto ? (
                      <XMarkIcon className="h-8 w-8 text-white" />
                      ) : (
                      <Bars3Icon className="h-8 w-8 text-white" />
                  )}
              </button>

            </div>

            {/* Menu mobile */}
            {menuAberto && (

              <div className="absolute top-full left-0 w-full bg-[#181824] flex flex-col items-end gap-4 py-2 px-8 shadow-lg transition-all md:hidden z-40">
                  {links.map((link) => (
                      <a key={link.id} href={`#${link.id}`} onClick={() => selecionarSecao(link.id)} className={classeLink(link.id)} >
                      {link.label}
                      </a>
                  ))}
              </div>

            )}
      </div>

      {menuAberto && <div className="h-40 transition-all duration-300"></div>}
    </section>

  );
}
