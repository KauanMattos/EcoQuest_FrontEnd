import { Link } from 'react-router-dom'

export default function Solucao() {
  return (
    <main>
      <section className="bg-white border-b border-black py-14 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-text-main mb-4">Nossa Solução</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Como o EcoQuest transforma a sustentabilidade em uma experiência gamificada
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-text-main mb-6">Processo de desenvolvimento</h2>

        <div className="space-y-4 mb-12">
          <div className="flex gap-4 border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">01</div>
            <div>
              <h3 className="font-bold text-text-main mb-1">Diagnóstico Ambiental</h3>
              <p className="text-gray-500 text-sm">Identificamos os principais problemas ambientais urbanos e a falta de engajamento da população com causas sustentáveis.</p>
            </div>
          </div>

          <div className="flex gap-4 border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">02</div>
            <div>
              <h3 className="font-bold text-text-main mb-1">Gamificação como Solução</h3>
              <p className="text-gray-500 text-sm">Utilizamos mecânicas de jogos — missões, pontos e conquistas — para transformar ações ecológicas em hábitos diários.</p>
            </div>
          </div>

          <div className="flex gap-4 border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">03</div>
            <div>
              <h3 className="font-bold text-text-main mb-1">Missões Sustentáveis</h3>
              <p className="text-gray-500 text-sm">Criamos um catálogo de missões baseadas em ações reais: plantio, reciclagem, economia de água e energia.</p>
            </div>
          </div>

          <div className="flex gap-4 border border-gray-200 rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">04</div>
            <div>
              <h3 className="font-bold text-text-main mb-1">Impacto Mensurável</h3>
              <p className="text-gray-500 text-sm">Cada missão apresenta o impacto ambiental real: CO2 evitado, litros economizados, resíduos desviados do aterro.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Faça parte da solução</h2>
          <p className="mb-6 opacity-80">Cada missão completa é um passo rumo a um planeta mais saudável.</p>
          <Link to="/missoes" className="bg-white text-primary font-semibold px-6 py-3 rounded-md no-underline hover:opacity-90">
            Ver Missões
          </Link>
        </div>
      </section>
    </main>
  )
}
