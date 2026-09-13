import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface ContatoFormData {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<ContatoFormData>()

  function onSubmit(_data: ContatoFormData) {
    setEnviado(true)
  }

  if (enviado) {
    return (
      <main className="flex items-center justify-center px-8 py-20">
        <div className="text-center">
          <span className="text-6xl block mb-4">✉️</span>
          <h2 className="text-2xl font-bold text-text-main mb-2">Mensagem enviada!</h2>
          <p className="text-gray-500">Obrigado pelo contato. Retornaremos em breve.</p>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="bg-white border-b border-black py-14 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-text-main mb-4">Contato</h1>
          <p className="text-gray-500">Tem alguma dúvida? Fale com a gente!</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-8 py-10">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-text-main mb-1">Nome *</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary"
                {...register('nome', { required: 'Informe seu nome' })}
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-main mb-1">E-mail *</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary"
                {...register('email', {
                  required: 'Informe seu e-mail',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-text-main mb-1">Assunto *</label>
            <input
              type="text"
              placeholder="Sobre o que você quer falar?"
              className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary"
              {...register('assunto', { required: 'Informe o assunto' })}
            />
            {errors.assunto && <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-text-main mb-1">Mensagem *</label>
            <textarea
              rows={5}
              placeholder="Escreva sua mensagem..."
              className="w-full px-4 py-3 rounded-md border border-gray-200 outline-none focus:border-primary resize-y"
              {...register('mensagem', { required: 'Escreva sua mensagem' })}
            />
            {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:opacity-90 cursor-pointer border-0"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </main>
  )
}
