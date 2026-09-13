export default function Sobre() {
  return (
    <main>
      <section className="bg-white border-b border-black py-14 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-text-main mb-4">Sobre o EcoQuest</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Conheça a plataforma e a equipe por trás do projeto
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-text-main mb-4">Nossa Missão</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              O EcoQuest nasceu com o objetivo de tornar a sustentabilidade acessível e divertida para todos.
              Através da gamificação, transformamos ações ecológicas em missões que geram pontos e recompensas.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Acreditamos que pequenas ações individuais, quando somadas, têm o poder de gerar grandes mudanças no mundo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-text-main mb-4">Tecnologias</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-500"><span className="text-primary">▸</span> React 19 + TypeScript</li>
              <li className="flex items-center gap-2 text-gray-500"><span className="text-primary">▸</span> Vite 8</li>
              <li className="flex items-center gap-2 text-gray-500"><span className="text-primary">▸</span> Tailwind CSS v4</li>
              <li className="flex items-center gap-2 text-gray-500"><span className="text-primary">▸</span> React Router DOM v7</li>
              <li className="flex items-center gap-2 text-gray-500"><span className="text-primary">▸</span> React Hook Form</li>
              <li className="flex items-center gap-2 text-gray-500"><span className="text-primary">▸</span> Context API + localStorage</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-text-main mb-6 text-center">Equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="font-bold text-text-main">Kauan Sfrizo Mattos</p>
              <p className="text-gray-400 text-sm">RM 571599</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="font-bold text-text-main">Kauã de Deus Nunes</p>
              <p className="text-gray-400 text-sm">RM 572213</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="font-bold text-text-main">Diego Zanon Harnisch</p>
              <p className="text-gray-400 text-sm">RM 568945</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="font-bold text-text-main">Lucas Almeida Abrantes</p>
              <p className="text-gray-400 text-sm">RM 570546</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="font-bold text-text-main">Guilherme da Costa Campos</p>
              <p className="text-gray-400 text-sm">RM 571689</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
