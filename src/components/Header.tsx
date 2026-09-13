import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-black sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="no-underline text-xl">
            <span className="text-primary font-bold">eco</span>
            <span className="text-text-main font-normal">quest</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'text-primary font-semibold no-underline text-sm' : 'text-gray-500 no-underline text-sm hover:text-primary'}>Início</NavLink>
            <NavLink to="/missoes" className={({ isActive }) => isActive ? 'text-primary font-semibold no-underline text-sm' : 'text-gray-500 no-underline text-sm hover:text-primary'}>Missões</NavLink>
            <NavLink to="/nova-missao" className={({ isActive }) => isActive ? 'text-primary font-semibold no-underline text-sm' : 'text-gray-500 no-underline text-sm hover:text-primary'}>Nova Missão</NavLink>
            <NavLink to="/integrantes" className={({ isActive }) => isActive ? 'text-primary font-semibold no-underline text-sm' : 'text-gray-500 no-underline text-sm hover:text-primary'}>Integrantes</NavLink>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? 'text-primary font-semibold no-underline text-sm' : 'text-gray-500 no-underline text-sm hover:text-primary'}>Sobre</NavLink>
            <NavLink to="/faq" className={({ isActive }) => isActive ? 'text-primary font-semibold no-underline text-sm' : 'text-gray-500 no-underline text-sm hover:text-primary'}>FAQ</NavLink>
            <NavLink to="/contato" className={({ isActive }) => isActive ? 'text-primary font-semibold no-underline text-sm' : 'text-gray-500 no-underline text-sm hover:text-primary'}>Contato</NavLink>
            <NavLink to="/solucao" className={({ isActive }) => isActive ? 'text-primary font-semibold no-underline text-sm' : 'text-gray-500 no-underline text-sm hover:text-primary'}>Solução</NavLink>
          </div>

          {/* Botão hamburguer mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden bg-transparent border-0 cursor-pointer p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3 pb-4 border-t border-gray-200 pt-4">
            <NavLink to="/" end className="text-gray-600 no-underline text-sm" onClick={() => setMenuOpen(false)}>Início</NavLink>
            <NavLink to="/missoes" className="text-gray-600 no-underline text-sm" onClick={() => setMenuOpen(false)}>Missões</NavLink>
            <NavLink to="/nova-missao" className="text-gray-600 no-underline text-sm" onClick={() => setMenuOpen(false)}>Nova Missão</NavLink>
            <NavLink to="/integrantes" className="text-gray-600 no-underline text-sm" onClick={() => setMenuOpen(false)}>Integrantes</NavLink>
            <NavLink to="/sobre" className="text-gray-600 no-underline text-sm" onClick={() => setMenuOpen(false)}>Sobre</NavLink>
            <NavLink to="/faq" className="text-gray-600 no-underline text-sm" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
            <NavLink to="/contato" className="text-gray-600 no-underline text-sm" onClick={() => setMenuOpen(false)}>Contato</NavLink>
            <NavLink to="/solucao" className="text-gray-600 no-underline text-sm" onClick={() => setMenuOpen(false)}>Solução</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}
