#  EcoQuest

> Plataforma de gamificação sustentável que transforma ações ecológicas em missões com pontos e recompensas.

---

##  Sobre o Projeto

O **EcoQuest** é uma Single Page Application (SPA) desenvolvida para o **Challenge SoulUp — Sprint 03** da FIAP 2026.

A plataforma permite que usuários:

-  Explorem missões sustentáveis por categoria e dificuldade
-  Criem novas missões com formulário validado
-  Acompanhem o impacto ambiental de cada ação
-  Vejam detalhes completos de cada missão com rota dinâmica

---

##  Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | Biblioteca de UI |
| Vite | 8 | Build tool e dev server |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | 4 | Estilização e responsividade |
| React Router DOM | 7 | Navegação SPA com rotas dinâmicas |
| React Hook Form | 7 | Formulários com validação |
| Context API | — | Gerenciamento de estado global |
| localStorage | — | Persistência de dados no navegador |

---

## Estrutura de Pastas

```
EcoQuest/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MissionCard.tsx
│   ├── contexts/
│   │   └── MissionsContext.tsx
│   ├── data/
│   │   └── missions.ts
│   ├── pages/
│   │   ├── Home/
│   │   ├── Missoes/
│   │   ├── MissaoDetalhe/
│   │   ├── NovaMissao/
│   │   ├── Integrantes/
│   │   ├── Sobre/
│   │   ├── Faq/
│   │   ├── Contato/
│   │   └── Solucao/
│   ├── types/
│   │   └── Mission.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

##  Como Executar Localmente

**Pré-requisitos:** Node.js 18+

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

Acesse: `http://localhost:5173`

---

## 🗺️ Páginas da Aplicação

| Rota | Página |
|---|---|
| `/` | Home |
| `/missoes` | Lista de Missões |
| `/missoes/:id` | Detalhe da Missão (rota dinâmica) |
| `/nova-missao` | Criar Nova Missão |
| `/integrantes` | Integrantes da Equipe |
| `/sobre` | Sobre o Projeto |
| `/faq` | Perguntas Frequentes |
| `/contato` | Contato |
| `/solucao` | Nossa Solução |

---

## Integrantes do Grupo

| Nome | RM | LinkedIn | GitHub |
|---|---|---|---|
| Kauan Sfrizo Mattos | 571599 | [LinkedIn](https://www.linkedin.com/in/kauan-mattos) | [GitHub](https://github.com/KauanMattos) |
| Kauã de Deus Nunes | 572213 | [LinkedIn](https://www.linkedin.com/in/kau%C3%A3-nunes-1505143b) | [GitHub](https://github.com/Kaua056) |
| Diego de Oliveira Zanon Harnisch | 568945 | [LinkedIn](https://www.linkedin.com/in/diego-zanon-32b79b252/) | [GitHub](https://github.com/trupi-zanon) |
| Lucas Almeida Abrantes | 570546 | [LinkedIn](https://www.linkedin.com/in/lucas-almeida-abrantes) | [GitHub](https://github.com/abrantes1) |
| Guilherme da Costa Campos | 571689 | [LinkedIn](https://www.linkedin.com/in/guilherme-da-costa-campos-bbb7a63aa) | [GitHub](https://github.com/guilherme76campos-creator) |

---

##  Repositório

🔗 https://github.com/KauanMattos/EcoQuest_FrontEnd

---

## Link do Vídeo



