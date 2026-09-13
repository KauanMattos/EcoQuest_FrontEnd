const integrantes = [
  { nome: 'Kauan Sfrizo Mattos', rm: '571599', papel: 'Tech Lead', github: 'https://github.com/KauanMattos' },
  { nome: 'Kauã de Deus Nunes', rm: '572213', papel: 'Desenvolvedor', github: 'https://github.com/Kaua056' },
  { nome: 'Diego de Oliveira Zanon Harnisch', rm: '568945', papel: 'Desenvolvedor', github: 'https://github.com/di-zanon' },
  { nome: 'Lucas Almeida Abrantes', rm: '570546', papel: 'Desenvolvedor', github: 'https://github.com/lucasabrantes1' },
  { nome: 'Guilherme da Costa Campos', rm: '571689', papel: 'QA', github: 'https://github.com/guilherme.campos' },
]

export default function Integrantes() {
  return (
    <main>
      <section className="bg-white border-b border-black py-14 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-text-main mb-4">Integrantes</h1>
          <p className="text-gray-500">Equipe EcoQuest — Turma 1TDSPO, FIAP 2026</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrantes.map(membro => (
            <div key={membro.rm} className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                {membro.nome.charAt(0)}
              </div>
              <h2 className="text-lg font-bold text-text-main mb-1">{membro.nome}</h2>
              <p className="text-primary font-semibold text-sm mb-1">{membro.papel}</p>
              <p className="text-gray-400 text-sm mb-3">RM: {membro.rm}</p>
              <a
                href={membro.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 no-underline hover:text-primary border border-gray-200 rounded-full px-3 py-1 hover:border-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
          <h2 className="text-lg font-bold text-text-main mb-1">FIAP — 1TDSPO</h2>
          <p className="text-gray-500 text-sm">Challenge SoulUp 2026 · Front-End Design Engineering</p>
        </div>
      </section>
    </main>
  )
}
