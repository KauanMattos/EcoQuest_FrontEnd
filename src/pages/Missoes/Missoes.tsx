import { useMissions } from '../../contexts/MissionsContext'
import MissionCard from '../../components/MissionCard'
import { categorias } from '../../data/missions'

export default function Missoes() {
  const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, filteredMissions } = useMissions()

  return (
    <main>
      <section className="bg-white border-b border-black py-14 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-text-main mb-4">Missões Ecológicas</h1>
          <p className="text-text-light mb-6">Explore missões sustentáveis e ganhe pontos</p>
          <input
            type="text"
            placeholder="Buscar missão..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-md border border-gray-200 text-text-main outline-none focus:border-primary"
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-text-light text-sm mb-6">{filteredMissions.length} missões encontradas</p>

        {filteredMissions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMissions.map(mission => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-5xl block mb-4">🔍</span>
            <p className="text-text-light">Nenhuma missão encontrada.</p>
          </div>
        )}
      </section>
    </main>
  )
}
