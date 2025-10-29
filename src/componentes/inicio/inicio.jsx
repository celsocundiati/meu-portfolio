import { ReactTyped } from "react-typed";

export default function Inicio() {
  return (
    
    <div id="inicio" className="min-h-screen pt-24 block  items-center gap-8 justify-between py-8 px-8 sm:flex">

        <div className="flex flex-col gap-2 py-4">
            <h3 className="text-white text-3xl font-semibold">Olá, Eu sou <span className="text-[#7562E0] block text-5xl">CELSO CUNDIATI</span></h3>

            <h3 className="text-lg sm:text-2xl md:text-xl text-[#A699FF]">
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

            <p className="text-white text-lg text-left md:text-justify max-w-lg leading-relaxed">
                Desenvolvedor Web (Fullstack) focado em criar soluções web intuitivas. 
                Também atuo em área de Marketing, propriamente em Gestão de Tráfego Pago para gerar
                 insights que impulsionam resultados.
            </p>

        </div>

        <div>
            <img className="h-xs w-xs rounded-xl" 
            src="https://res.cloudinary.com/degsmhalt/image/upload/v1761481551/IMG-20240915-WA0036_wqoae1.jpg" 
            alt="FOTO ILUSTRATIVA" />
        </div>
    </div>
  );
}