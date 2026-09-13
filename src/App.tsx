import { Routes, Route } from 'react-router-dom'
import { MissionsProvider } from './contexts/MissionsContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Missoes from './pages/Missoes/Missoes'
import MissaoDetalhe from './pages/MissaoDetalhe/MissaoDetalhe'
import NovaMissao from './pages/NovaMissao/NovaMissao'
import Integrantes from './pages/Integrantes/Integrantes'
import Sobre from './pages/Sobre/Sobre'
import Faq from './pages/Faq/Faq'
import Contato from './pages/Contato/Contato'
import Solucao from './pages/Solucao/Solucao'

export default function App() {
  return (
    <MissionsProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missoes" element={<Missoes />} />
        <Route path="/missoes/:id" element={<MissaoDetalhe />} />
        <Route path="/nova-missao" element={<NovaMissao />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/solucao" element={<Solucao />} />
      </Routes>
      <Footer />
    </MissionsProvider>
  )
}
