import { useState } from 'react'

const perguntas = [
  { pergunta: 'O que é o EcoQuest?', resposta: 'O EcoQuest é uma plataforma de gamificação sustentável que transforma ações ecológicas em missões com pontos e recompensas.' },
  { pergunta: 'Como participar de uma missão?', resposta: 'Acesse a página de Missões, escolha uma que combine com você e complete a ação no mundo real.' },
  { pergunta: 'Posso criar minhas próprias missões?', resposta: 'Sim! Na aba "Nova Missão" você pode criar missões sustentáveis para a comunidade.' },
  { pergunta: 'Como os pontos funcionam?', resposta: 'Cada missão tem um valor em pontos de acordo com sua dificuldade. Missões difíceis valem mais pontos.' },
  { pergunta: 'O EcoQuest é gratuito?', resposta: 'Sim, o EcoQuest é 100% gratuito.' },
  { pergunta: 'Quais categorias existem?', resposta: 'Reflorestamento, Reciclagem, Alimentação, Água, Mobilidade e Energia.' },
]

export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(null)

  function toggle(index: number) {
    if (aberta === index) {
      setAberta(null)
    } else {
      setAberta(index)
    }
  }

  return (
    <main>
      <section className="bg-white border-b border-black py-14 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-text-main mb-4">Perguntas Frequentes</h1>
          <p className="text-gray-500">Tire suas dúvidas sobre o EcoQuest</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-8 py-12">
        <div className="space-y-3">
          {perguntas.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 text-left cursor-pointer border-0"
              >
                <span className="font-semibold text-text-main">{item.pergunta}</span>
                <span className="text-primary text-xl">{aberta === index ? '−' : '+'}</span>
              </button>
              {aberta === index && (
                <div className="px-6 pb-4 bg-white">
                  <p className="text-gray-500">{item.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
