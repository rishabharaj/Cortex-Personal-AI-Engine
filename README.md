<div align="center">

# Cortex – Personal AI Second Brain

An experimental, local‑first knowledge exploration interface that turns your scattered notes, project plans, research, and ideas into an interactive, visual, searchable graph powered by semantic AI assistance.

</div>

## ✨ Core Value
Cortex helps you externalize thinking: capture, connect, explore, and evolve knowledge. It blends structured project roadmapping, semantic search, contextual Q&A, and visual relationship mapping into one cohesive UX.

## 🧠 Key Features
- Visual knowledge base (graph‑style conceptual layout & animated transitions)
- Semantic + keyword hybrid search with conversational context (chat UI components in `src/search`)
- Project roadmap editor & stage columns (`src/components/projects`)
- Manage dashboard with feature panels & interactive hover states (`src/components/manage`)
- Testimonial & marketing landing sections (for future public launch positioning)
- Theming (dark/light) with smooth transitions
- Accessible, composable UI primitives (Radix + shadcn/ui layer in `src/components/ui`)
- Responsive design + polished micro‑interactions (scale, elevation, brightness)
- Typed end‑to‑end (TypeScript) with utility types in `src/lib` & `src/types`

## 🏗️ Tech Stack
| Layer | Stack |
|-------|-------|
| Framework / Bundler | Vite + React 18 + TypeScript |
| UI & Styling | Tailwind CSS, shadcn/ui, Radix Primitives, lucide-react icons |
| Data Fetch / Async | @tanstack/react-query |
| Forms & Validation | react-hook-form + zod (@hookform/resolvers) |
| Charts / Visual | recharts, custom animation utilities (`src/lib/animations.ts`) |
| State / Context | React Context (Auth, Theme) + local component state |
| Interaction Enhancements | Embla carousel, Radix dialog / popover / tooltip suites |

## 📁 Project Structure (selected)
```
src/
	components/        # Reusable UI + domain components
	components/landing # Marketing / landing page sections
	components/search  # Chat & semantic search UI
	components/manage  # Dashboard + feature panels
	components/projects# Project roadmap & stages
	contexts/          # Theme & Auth providers
	hooks/             # Custom hooks
	lib/               # Animations, helpers, types
	pages/             # Route-level page components
	types/             # Shared type definitions
	utils/             # Cross-cutting utility logic
```

## 🚀 Getting Started
Prerequisites: Node.js 18+ (recommend installing via nvm or volta).

```bash
git clone <your-fork-or-repo-url>
cd cortex-second-brain
npm install        # or pnpm i / bun i (lockfile present -> prefer same manager used originally)
npm run dev        # start local dev server (default: http://localhost:5173)
```

### Available Scripts
| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run build:dev` | Development‑mode build (faster debugging) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the codebase |

## 🔐 Environment & Configuration
Currently no external API keys are required (semantic intelligence layer hooks are placeholder‑ready). Add future env vars via a `.env` file at project root (Vite exposes variables prefixed with `VITE_`). Example:
```
VITE_API_BASE_URL=https://api.example.com
VITE_OPENAI_KEY=sk-...
```

Access in code with: `import.meta.env.VITE_API_BASE_URL`.

## 🎨 Theming & Styling
- Theme toggling handled in `ThemeContext` + `next-themes` integration.
- Design tokens primarily live as Tailwind utility classes; component variants use `class-variance-authority`.
- Animations & entrance transitions consolidated in `src/lib/animations.ts` and lightweight utility wrappers.

## 🧩 UI Components
All primitive UI elements (buttons, dialogs, inputs, etc.) reside in `src/components/ui`. These wrap Radix primitives with consistent styling and accessibility baked in.

## 🗺️ Future Roadmap (proposed)
- [ ] Persisted graph storage & vector embeddings
- [ ] Realtime collaborative editing
- [ ] Pluggable ingestion pipelines (Markdown, Notion export, PDF)
- [ ] AI agent synthesis of roadmap milestones
- [ ] Exportable knowledge graph snapshots
- [ ] Offline-first caching & sync conflict resolution

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/awesome-idea`
3. Commit changes: `git commit -m "feat: add awesome idea"`
4. Push branch: `git push origin feat/awesome-idea`
5. Open a Pull Request

Coding Guidelines:
- Keep components focused & typed
- Prefer composition over deep prop drilling
- Use existing UI primitives before adding new ones
- Co-locate feature-specific styles & logic

## 🧪 Testing (Next Steps)
Currently not implemented. Suggested stack: Vitest + React Testing Library for component and hook tests.

## 📦 Deployment
Any static host (Vercel / Netlify / Cloudflare Pages / GitHub Pages) works.
1. Build: `npm run build`
2. Deploy contents of `dist/`
Add appropriate headers / caching rules as needed (index.html fallback for SPA routing).

## 📜 License
Licensed under the MIT License – see [LICENSE](./LICENSE).

## 🙏 Acknowledgments
- Radix UI & shadcn/ui for accessible primitives
- Unsplash photographers (images used in feature illustrations / placeholders)
- Open-source community libraries listed in `package.json`

## 📬 Contact
Feel free to open an issue or reach out via linked social profiles in the site footer.

---
"Cortex" is an experimental project – expect iteration. Contributions & feedback welcome.

---
Made with ❤️ by [Rishabharaj](https://github.com/rishabharaj)

