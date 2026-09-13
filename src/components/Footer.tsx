import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-auto">
      <div className="max-w-5xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <div className="mb-3 text-xl">
              <span className="text-primary font-bold">eco</span>
              <span className="text-white font-normal">quest</span>
            </div>
            <p className="text-sm leading-relaxed">
              Plataforma de gamificação sustentável que transforma ações ecológicas em missões e recompensas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Navegação</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/" className="text-gray-400 no-underline text-sm hover:text-primary">Início</Link></li>
              <li><Link to="/missoes" className="text-gray-400 no-underline text-sm hover:text-primary">Missões</Link></li>
              <li><Link to="/nova-missao" className="text-gray-400 no-underline text-sm hover:text-primary">Nova Missão</Link></li>
              <li><Link to="/sobre" className="text-gray-400 no-underline text-sm hover:text-primary">Sobre</Link></li>
              <li><Link to="/faq" className="text-gray-400 no-underline text-sm hover:text-primary">FAQ</Link></li>
              <li><Link to="/contato" className="text-gray-400 no-underline text-sm hover:text-primary">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Projeto</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li className="text-sm">FIAP — 1TDSPO 2026</li>
              <li className="text-sm">Challenge SoulUp</li>
              <li className="text-sm">Front-End Design Engineering</li>
              <li>
                <a
                  href="https://github.com/KauanMattos/EcoQuest_FrontEnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 no-underline text-sm hover:text-primary"
                >
                  GitHub do Projeto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          &copy; 2026 EcoQuest — FIAP. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
