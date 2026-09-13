import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMissions } from '../../contexts/MissionsContext'
import { categorias, tagOptions } from '../../data/missions'
import type { MissionFormData } from '../../types/Mission'

export default function NovaMissao() {
  const { addMission } = useMissions()
  const navigate = useNavigate()
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const { register, handleSubmit, formState: { errors } } = useForm<MissionFormData>()

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  function onSubmit(data: MissionFormData) {
    addMission({ ...data, pontos: Number(data.pontos), tags: selectedTags })
    navigate('/missoes')
  }

  return (
    <main>
      <section className="bg-white border-b border-black py-14 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-text-main mb-4">Nova Missão</h1>
          <p className="text-text-light">Crie uma missão sustentável para a comunidade</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-8 py-10">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-text-main mb-1">Título *</label>
            <input
              type="text"
              placeholder="Ex: Plantio de Árvores no Parque"
              className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary"
              {...register('titulo', { required: 'O título é obrigatório' })}
            />
            {errors.titulo && <p className="text-red-500 text-sm mt-1">{errors.titulo.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-text-main mb-1">Descrição *</label>
            <textarea
              rows={4}
              placeholder="Descreva os detalhes da missão..."
              className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary resize-y"
              {...register('descricao', { required: 'A descrição é obrigatória' })}
            />
            {errors.descricao && <p className="text-red-500 text-sm mt-1">{errors.descricao.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-text-main mb-1">Categoria *</label>
              <select
                className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary"
                {...register('categoria', { required: 'Selecione uma categoria' })}
              >
                <option value="">Selecione</option>
                {categorias.filter(c => c !== 'Todas').map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.categoria && <p className="text-red-500 text-sm mt-1">{errors.categoria.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-main mb-1">Dificuldade *</label>
              <select
                className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary"
                {...register('dificuldade', { required: 'Selecione a dificuldade' })}
              >
                <option value="">Selecione</option>
                <option value="Fácil">Fácil</option>
                <option value="Médio">Médio</option>
                <option value="Difícil">Difícil</option>
              </select>
              {errors.dificuldade && <p className="text-red-500 text-sm mt-1">{errors.dificuldade.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-text-main mb-1">Pontos *</label>
              <input
                type="number"
                placeholder="Ex: 150"
                className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary"
                {...register('pontos', { required: 'Informe os pontos', min: { value: 10, message: 'Mínimo 10 pontos' } })}
              />
              {errors.pontos && <p className="text-red-500 text-sm mt-1">{errors.pontos.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-main mb-1">Impacto Ambiental *</label>
              <input
                type="text"
                placeholder="Ex: 5kg de CO2 evitados"
                className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary"
                {...register('impacto', { required: 'Informe o impacto' })}
              />
              {errors.impacto && <p className="text-red-500 text-sm mt-1">{errors.impacto.message}</p>}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-text-main mb-2">Tags</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {tagOptions.map(tag => (
                <label key={tag} className="flex items-center gap-2 p-3 rounded-md border border-gray-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                    className="accent-primary"
                  />
                  <span className="text-sm text-text-main">{tag}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:opacity-90 cursor-pointer border-0"
          >
            Criar Missão
          </button>
        </form>
      </section>
    </main>
  )
}
