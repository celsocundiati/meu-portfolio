import React from "react";
import { useState } from "react";

export default function Cabecalho () {

    const [ativo, setAtivo] = useState("inicio");

    function classeLink(secao) {
        return `text-base md:text-xl font-medium transition-all hover:text-[#7562E0] ${
            ativo === secao ? "text-[#7562E0]" : "text-white"
        }`;
    };

    function selecionarSecao(secao) {
        setAtivo(secao);
    }
    
    return (

        <div className="bg-[#181824] flex justify-between items-center w-full py-4 px-8 shadow-md z-1">
            <h1 className="text-lg md:text-2xl font-bold text-[#7562E0]">Celso Cundiati</h1>

            <nav className="flex gap-6">

                <a href="#inicio" onClick={() => selecionarSecao("inicio")} className={classeLink("inicio")}>Início</a>
                <a href="#sobre" onClick={() => selecionarSecao("sobre")} className={classeLink("sobre")}>Sobre</a>
                <a href="#projectos" onClick={() => selecionarSecao("projectos")} className={classeLink("projectos")}>Projectos</a>
                <a href="#contacto" onClick={() => selecionarSecao("contacto")} className={classeLink("contacto")}>Contacto</a>

            </nav>
        </div>
    )
}