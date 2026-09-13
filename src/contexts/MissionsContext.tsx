import { createContext, useContext, useState, useEffect } from 'react'
import type { Mission, MissionFormData } from '../types/Mission'
import { missionsData } from '../data/missions'

interface MissionsContextData {
  missions: Mission[]
  filteredMissions: Mission[]
  searchTerm: string
  setSearchTerm: (term: string) => void
  selectedCategory: string
  setSelectedCategory: (cat: string) => void
  addMission: (data: MissionFormData & { tags: string[] }) => void
}

const MissionsContext = createContext<MissionsContextData>({} as MissionsContextData)

export function MissionsProvider({ children }: { children: React.ReactNode }) {
  const [missions, setMissions] = useState<Mission[]>(() => {
    const saved = localStorage.getItem('ecoquest-missions')
    return saved ? JSON.parse(saved) : missionsData
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  useEffect(() => {
    localStorage.setItem('ecoquest-missions', JSON.stringify(missions))
  }, [missions])

  function addMission(data: MissionFormData & { tags: string[] }) {
    const newMission: Mission = {
      id: Date.now(),
      titulo: data.titulo,
      descricao: data.descricao,
      categoria: data.categoria,
      dificuldade: data.dificuldade as Mission['dificuldade'],
      pontos: Number(data.pontos),
      impacto: data.impacto,
      tags: data.tags,
      participantes: 0,
    }
    setMissions(prev => [newMission, ...prev])
  }

  const filteredMissions = missions.filter(m => {
    const matchSearch =
      m.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = selectedCategory === 'Todas' || m.categoria === selectedCategory
    return matchSearch && matchCategory
  })

  return (
    <MissionsContext.Provider
      value={{
        missions,
        filteredMissions,
        searchTerm,
        setSearchTerm,
        selectedCategory,
        setSelectedCategory,
        addMission,
      }}
    >
      {children}
    </MissionsContext.Provider>
  )
}

export function useMissions() {
  return useContext(MissionsContext)
}
