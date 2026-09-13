import { useParams, useNavigate } from 'react-router-dom'
import { useMissions } from '../../contexts/MissionsContext'

export default function MissaoDetalhe() {
  const { id } = useParams<{ id: string }>()
  const { missions } = useMissions()
  const navigate = useNavigate()

  const missao = missions.find(m => m.id === Number(id))

  if (!missao) {
    return (
      <main className="flex items-center justify-center px-8 py-20">
        <div className="text-center">
          <span className="text-6xl block mb-4">🔍</span>
          <h2 className="text-2xl font-bold text-text-main mb-2">Missão não encontrada</h2>
          <button
            onClick={() => navigate('/missoes')}
            className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 cursor-pointer border-0"
          >
            Voltar para missões
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="bg-white border-b border-black py-14 px-8">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => navigate('/missoes')}
            className="text-gray-500 hover:text-primary mb-6 bg-transparent border-0 cursor-pointer p-0"
          >
            ← Voltar para missões
          </button>
          <div className="flex gap-3 mb-4">
            <span className="bg-blue-50 text-primary border border-blue-200 text-xs font-semibold px-3 py-1 rounded">
              {missao.categoria}
            </span>
            <span className="text-xs font-semibold text-gray-500 border border-gray-200 px-3 py-1 rounded">
              {missao.dificuldade}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-text-main mb-3">{missao.titulo}</h1>
          <p className="text-gray-500 text-lg">{missao.descricao}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-text-main mb-3">Impacto Ambiental</h2>
              <p className="text-gray-500">🌱 {missao.impacto}</p>
            </div>

            {missao.tags.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-lg font-bold text-text-main mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {missao.tags.map(tag => (
                    <span key={tag} className="bg-blue-50 text-primary border border-blue-200 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-primary text-white rounded-xl p-6 text-center">
              <p className="opacity-70 text-sm mb-1">Pontos</p>
              <p className="text-4xl font-bold">{missao.pontos} pts</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-gray-400 text-sm mb-1">Participantes</p>
              <p className="text-3xl font-bold text-text-main">{missao.participantes}</p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-gray-400 text-sm mb-1">Dificuldade</p>
              <p className="text-xl font-bold text-text-main">{missao.dificuldade}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
