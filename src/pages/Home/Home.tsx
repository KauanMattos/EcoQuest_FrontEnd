import { Link } from 'react-router-dom'
import { useMissions } from '../../contexts/MissionsContext'

export default function Home() {
  const { missions } = useMissions()

  return (
    <main>
      {/* Hero */}
      <section className="bg-white border-b border-black py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-text-main mb-4">
            Transforme ações verdes em <span className="text-primary">missões</span>
          </h1>
          <p className="text-text-light text-lg mb-8">
            Complete missões sustentáveis, ganhe pontos e ajude a salvar o planeta.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/missoes" className="bg-primary text-white font-semibold px-6 py-3 rounded-md no-underline hover:opacity-90">
              Ver Missões
            </Link>
            <Link to="/nova-missao" className="border border-gray-300 text-gray-600 font-semibold px-6 py-3 rounded-md no-underline hover:border-primary hover:text-primary">
              Criar Missão
            </Link>
          </div>
        </div>
      </section>

      {/* Missões em destaque */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-2xl font-bold text-text-main mb-6 text-center">Missões em destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {missions.slice(0, 4).map(m => (
            <div key={m.id} className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 bg-white">
              <span className="text-text-muted text-sm">{m.titulo}</span>
              <span className="text-primary font-bold">{m.pontos} pts</span>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-gray-50 py-16 px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-text-main mb-10 text-center">Como funciona</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <span className="text-4xl block mb-3">🔍</span>
              <h3 className="font-semibold text-text-main mb-2">Explore Missões</h3>
              <p className="text-text-light text-sm">Descubra missões ecológicas disponíveis.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <span className="text-4xl block mb-3">🎯</span>
              <h3 className="font-semibold text-text-main mb-2">Participe</h3>
              <p className="text-text-light text-sm">Complete ações sustentáveis no mundo real.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <span className="text-4xl block mb-3">⭐</span>
              <h3 className="font-semibold text-text-main mb-2">Ganhe Pontos</h3>
              <p className="text-text-light text-sm">Acumule pontos por missão completada.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <span className="text-4xl block mb-3">🌍</span>
              <h3 className="font-semibold text-text-main mb-2">Impacto Real</h3>
              <p className="text-text-light text-sm">Cada ação gera impacto no meio ambiente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para salvar o planeta?</h2>
        <p className="text-white mb-8 opacity-80">Comece agora e transforme suas ações em pontos!</p>
        <Link to="/missoes" className="bg-white text-primary font-semibold px-8 py-3 rounded-md no-underline hover:opacity-90">
          Começar Agora
        </Link>
      </section>
    </main>
  )
}
