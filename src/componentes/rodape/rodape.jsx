import {
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export default function ContatoERodape() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log("Contato enviado:", Object.fromEntries(form.entries()));
    alert("Mensagem enviada! (demonstração)");
  };

  return (
    <section className="bg-[#181824] text-white pt-12 md:pt-16 pb-6 md:pb-10 px-6 md:px-16">
      {/* GRID principal - Esquerda | Direita */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
        
        {/* ESQUERDA */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7562E0]">
            Conecte-se comigo:
          </h2>

          <p className="mt-4 text-gray-200 text-base md:text-lg">
            Satisfeito comigo? Entre em contato comigo
          </p>

          {/* Ícones de redes sociais */}
          <div className="flex items-center gap-5 mt-6">

            <a href="www.linkedin.com/in/celso-cundiati-b65486324" className="text-[#7562E0] text-3xl hover:opacity-80 transition">
              <FaLinkedinIn />
            </a>

            <a href="cundiaticelso@gmail.com" className="text-[#7562E0] text-3xl hover:opacity-80 transition">
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* DIREITA – FORM */}
        <div>
          <h3 className="text-2xl md:text-[28px] font-semibold leading-snug mb-6">
            Entre em contato comigo, vamos fazer mágica juntos
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Digite o seu nome"
              required
              className="w-full h-12 md:h-14 rounded-xl px-5 bg-[#2A2A3B] text-gray-200 placeholder-gray-400 border border-transparent focus:border-[#7562E0] focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Digite o seu mail"
              required
              className="w-full h-12 md:h-14 rounded-xl px-5 bg-[#2A2A3B] text-gray-200 placeholder-gray-400 border border-transparent focus:border-[#7562E0] focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Mensgem"
              rows="5"
              required
              className="w-full rounded-xl px-5 py-4 bg-[#2A2A3B] text-gray-200 placeholder-gray-400 border border-transparent focus:border-[#7562E0] focus:outline-none"
            />

            <button
              type="submit"
              className="cursor-pointer w-36 md:w-40 h-12 rounded-xl bg-[#7562E0] text-white font-medium hover:opacity-90 active:opacity-100 transition"
            >
              Send
            </button>

          </form>
        </div>
      
      </div>

      {/* FOOTER INFERIOR */}
      <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-300">

        <p className="text-sm">©2025 Celso Cundiati</p>

        <div className="flex gap-6 text-sm">
          <span>Fullstack Developer</span>
          <span>Web Developer</span>
          <span>UI Designer</span>
        </div>

        <p className="text-sm">
          Designed by <span className="text-[#7562E0]">@ernestechie</span>
        </p>

        {/* Ícones novamente (como no protótipo) */}
        <div className="flex items-center gap-4 text-[#7562E0]">

          <FaLinkedinIn className="text-xl hover:opacity-80 transition" />
          <FaEnvelope className="text-xl hover:opacity-80 transition" />

        </div>

      </div>
    </section>
  );
}
