import React from "react";

function Projectos() {
  const projectos = [
    {
      id: 1,
      title: "TWINDER",
      desc: "A live Geolocation app for finding tweets and twitter users around you.",
      image:
        "https://cdn-icons-png.flaticon.com/512/854/854878.png", // imagem ilustrativa
    },
    {
      id: 2,
      title: "LIVENTS",
      desc: "A video streaming app with live Geolocation, for streaming events.",
      image:
        "https://cdn-icons-png.flaticon.com/512/4211/4211803.png",
    },
    {
      id: 3,
      title: "MOOVE",
      desc: "Mobile app for booking instant pickup & dropoff accross major cities.",
      image:
        "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
  ];

  return (
    <section id="projectos" className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7562E0] mb-8">
          Projetos em destaque:
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          Trabalhei em muitos projetos ao longo de ser um desenvolvedor web,
           aqui estão alguns dos meus projetos ao vivo no mundo real
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projectos.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#1a1a3a] rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="bg-[#2a2a4a] rounded-xl flex justify-center items-center h-44 mb-6 border border-purple-400/30">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="h-28 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#7562E0]  mb-3">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-6">{proj.desc}</p>

              <div className="flex gap-3">
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2 rounded-lg cursor-pointer">
                  View Live
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white font-medium px-5 py-2 rounded-lg transition-all cursor-pointer">
                  Github Repo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projectos;