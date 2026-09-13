import { Link } from 'react-router-dom'
import type { Mission } from '../types/Mission'

interface MissionCardProps {
  mission: Mission
}

export default function MissionCard({ mission }: MissionCardProps) {
  function getDificuldadeCor(dificuldade: string) {
    if (dificuldade === 'Fácil') return 'text-green-600'
    if (dificuldade === 'Médio') return 'text-yellow-600'
    return 'text-red-500'
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="bg-blue-50 text-primary border border-blue-200 text-xs font-semibold px-3 py-1 rounded">
          {mission.categoria}
        </span>
        <span className={`text-sm font-semibold ${getDificuldadeCor(mission.dificuldade)}`}>
          {mission.dificuldade}
        </span>
      </div>

      <h3 className="text-lg font-bold text-text-main mb-2">{mission.titulo}</h3>
      <p className="text-gray-500 text-sm mb-4">{mission.descricao}</p>

      <div className="flex items-center justify-between mb-3">
        <span className="text-primary font-bold text-xl">{mission.pontos} pts</span>
        <span className="text-gray-400 text-xs">{mission.participantes} participantes</span>
      </div>

      <p className="text-gray-400 text-xs mb-3">🌱 {mission.impacto}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {mission.tags.map(tag => (
          <span key={tag} className="bg-blue-50 text-primary text-xs px-2 py-1 rounded-full border border-blue-200">
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={`/missoes/${mission.id}`}
        className="block text-center text-sm font-semibold text-primary border border-blue-200 rounded-md py-2 hover:bg-blue-50 no-underline"
      >
        Ver detalhes →
      </Link>
    </div>
  )
}
