import { ReactTyped } from "react-typed";

export default function Inicio() {
  return (
    
    <div id="inicio" className="min-h-screen block  items-center gap-8 justify-between py-8 px-8 sm:flex">

        <div className="flex flex-col gap-2 py-4">
            <h3 className="text-white text-3xl font-semibold">Olá, Eu sou <span className="text-[#7562E0] block text-5xl">CELSO CUNDIATI</span></h3>

            <h3 className="text-lg sm:text-2xl md:text-xl text-white">
                <ReactTyped
                    strings={[
                        "Desenvolvedor Web Full Stack",
                        "Programador apaixonado por tecnologia",
                        "Construo soluções web completas",
                        "Criador de soluções digitais modernas",
                    ]}
                    typeSpeed={50}
                    backSpeed={25}
                    loop
                />
            </h3>

            <p className="text-white text-lg text-justify">
                Desenvolvedor Fullstack focado em criar soluções web intuitivas. 
                Também atuo em mineração de dados para gerar insights que impulsionam resultados.
            </p>

            {/* <p className="text-white text-lg">
                Sou Desenvolvedor Web Full Stack dedicado a construir soluções web modernas e eficientes. 
                Especializo-me em criar aplicações responsivas e amigáveis ao usuário, 
                implementar sistemas back-end robustos e integrar experiências front-end fluídas. 
                Meu objetivo é entregar projetos de alta qualidade que combinem funcionalidade, 
                performance e uma experiência de usuário refinada, ajudando empresas e indivíduos 
                a alcançar seus objetivos digitais.
            </p> */}
        </div>

        <div>
            <img className="h-xs w-xs rounded-full" 
            src="https://res.cloudinary.com/degsmhalt/image/upload/v1761481551/IMG-20240915-WA0036_wqoae1.jpg" 
            alt="FOTO ILUSTRATIVA" />
        </div>
    </div>
  );
}