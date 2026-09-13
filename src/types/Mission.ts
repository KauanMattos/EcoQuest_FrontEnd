export interface Mission {
  id: number
  titulo: string
  descricao: string
  categoria: string
  dificuldade: 'Fácil' | 'Médio' | 'Difícil'
  pontos: number
  impacto: string
  tags: string[]
  participantes: number
}

export interface MissionFormData {
  titulo: string
  descricao: string
  categoria: string
  dificuldade: string
  pontos: number
  impacto: string
}
