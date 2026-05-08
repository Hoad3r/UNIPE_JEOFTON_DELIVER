# Cardápio Digital — Bella Vista

**Disciplina:** Engenharia de Interface HTML5/CSS3  
**Professor:** Jeofton Costa | **UNIPÊ** | 2026

---

## Definição do Problema

**Contexto:** Restaurantes ainda dependem de cardápios físicos que se desatualizam e exigem reimpressão constante. O custo e a demora tornam difícil manter informações de preço e disponibilidade corretas.

**Público-alvo:** Clientes de 18–40 anos que acessam o cardápio via QR Code no próprio celular, durante a refeição ou antes de pedir.

**Dor principal:** O usuário não consegue ver foto, descrição e preço atualizado de um prato antes de pedir, o que gera indecisão e dependência do garçom.

**Critério de sucesso:** O usuário consegue encontrar qualquer prato por categoria em menos de 15 segundos, em qualquer dispositivo, sem precisar de ajuda.

---

## Como Rodar

```bash
git clone https://github.com/Hoad3r/UNIPE_JEOFTON_DELIVER.git
```

Abra `cardapio-digital/index.html` no navegador — ou use a extensão **Live Server** no VS Code para hot reload.

---

## Wireframe

```
┌──────────────────────────────────────────────────────────┐
│  <header> .header (sticky)                               │
│  Logo Bella Vista          [ Links ] [ hamburguer mobile]│
├──────────────────────────────────────────────────────────┤
│  <section> .hero                                         │
│  <h1> Restaurante Bella Vista  ← único H1 na página      │
│  <p>  Slogan — tipografia fluida via clamp()             │
│  [ CTA: Ver Cardápio ]  ← .btn--primary                  │
├──────────────────────────────────────────────────────────┤
│  <section> .cards-grid  (Destaques — Aula 09)            │
│  ┌──────────────────────────┐  ┌──────────┐             │
│  │ card--featured (2 cols)  │  │  .card   │             │
│  │ Risoto de Funghi Porcini │  │  Filé    │             │
│  └──────────────────────────┘  └──────────┘             │
├──────────────────────────────────────────────────────────┤
│  .category-filter  (Flexbox + overflow-x: auto)          │
│  [ Todos★ ] [ Entradas ] [ Pratos ] [ Bebidas ] [ Sbrm ] │
├──────────────────────────────────────────────────────────┤
│  <main> .menu-grid  (CSS Grid minmax)                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ [foto]   │  │ [foto]   │  │ [foto]   │              │
│  │ <h3>Nome │  │ <h3>Nome │  │ <h3>Nome │              │
│  │ Desc.    │  │ Desc.    │  │ Desc.    │              │
│  │ R$ 00,00 │  │ R$ 00,00 │  │ R$ 00,00 │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│  mobile: 2 col → tablet 768px: 2 col → desktop: 3–4 col  │
├──────────────────────────────────────────────────────────┤
│  <footer> .footer  (CSS Grid auto-fit/minmax)            │
│  Sobre | Horários | Endereço | Redes Sociais | © 2026    │
└──────────────────────────────────────────────────────────┘
```

---

## Paleta de Cores

| Papel | Token | Hex | Contraste WCAG |
|---|---|---|---|
| Primária — Terracota | `--color-primary-500` | `#C0522A` | 4.6:1 sobre branco ✅ AA |
| Secundária — Dourado | `--color-secondary-500` | `#C9971C` | preços e destaques |
| Texto principal | `--color-text-primary` | `#111827` | 19:1 sobre branco ✅ AAA |
| Fundo | `--color-bg-primary` | `#FFFFFF` | — |
| Borda | `--color-border` | `#D1D5DB` | — |
| Sucesso | `--color-success` | `#166534` | disponibilidade |
| Perigo | `--color-danger` | `#991B1B` | alérgenos / picância |

**Inspiração:** tons quentes de adobe/barro + dourado envelhecido — remetem ao ambiente rústico de restaurantes italianos.

---

## Tipografia

| Token | Valor | Uso |
|---|---|---|
| `--font-heading` | Playfair Display, Georgia, serif | H1, H2, H3 |
| `--font-body` | Inter, system-ui, sans-serif | parágrafos e UI |
| Escala | Major Third ×1.250 | `--font-xs` até `--font-3xl` |
| Fluida (hero) | `clamp(var(--font-lg), 5vw, var(--font-3xl))` | H1 sem media query |

---

## Estrutura de Arquivos

```
cardapio-digital/
├── index.html
├── css/
│   ├── variables.css            ← tokens: cores, tipo, espaço, breakpoints, dark mode
│   ├── reset.css                ← Modern CSS Reset (Andy Bell 2024)
│   ├── base.css                 ← h1–h6, p, a, ul sem classes
│   ├── layout.css               ← CSS Grid macro + breakpoints mobile-first
│   ├── components/
│   │   ├── navbar.css           ← BEM Navbar: sticky, hamburger, scroll behavior
│   │   ├── hero.css             ← Flexbox + clamp() tipografia fluida
│   │   ├── card.css             ← BEM Card: variantes featured, hover, imagens
│   │   ├── btn.css              ← Botões: --primary, --outline, --ghost, :focus-visible
│   │   ├── category-filter.css  ← Flexbox + scroll horizontal no mobile
│   │   ├── item-card.css        ← BEM item-card + animação pop-forward
│   │   └── footer.css           ← CSS Grid auto-fit/minmax
│   └── utilities.css            ← helpers (importado por último — ITCSS)
└── js/
    └── main.js                  ← filtro categorias, hamburguer, scroll, copyright
```

---

## Checklist de Entregáveis

### Aula 08 — Base do Projeto

- [x] Contexto descrito (domínio, problema real)
- [x] Público-alvo definido (idade, dispositivo, contexto de uso)
- [x] Wireframe ASCII documentado
- [x] Estrutura ITCSS: settings → generic → base → layout → components → utilities
- [x] `variables.css` com escala tipográfica Major Third e paleta completa
- [x] `reset.css` Modern CSS Reset com `prefers-reduced-motion`
- [x] HTML semântico: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [x] Hierarquia única H1 → H2 (categorias) → H3 (pratos)
- [x] `alt` descritivo em todas as imagens
- [x] `aria-label` e `aria-pressed` nos controles de filtro
- [x] CSS Grid macro com `grid-template-areas`
- [x] Filtro por categoria via JavaScript
- [x] Dark mode via `prefers-color-scheme: dark`

### Aula 09 — Componentes BEM + Responsividade

- [x] Navbar BEM com hamburger mobile e comportamento `.header--scrolled` ao rolar
- [x] Tecla Escape fecha o menu hamburger (`keydown` listener)
- [x] Seção de destaques com `.cards-grid` responsivo (2 cols mobile → 3 cols desktop)
- [x] Componente `.card` com variante `.card--featured` (borda primária, destaque visual)
- [x] Sistema de botões `.btn` com variantes `--primary`, `--outline`, `--ghost`
- [x] `:focus-visible` acessível em todos os botões e links interativos
- [x] Footer migrado para CSS Grid com `auto-fit/minmax`
- [x] Copyright com ano automático via JavaScript
- [x] `minmax(0, 1fr)` em todos os grids para prevenir overflow horizontal no mobile
- [x] Smooth scroll para âncoras internas

---

## Conceitos CSS Aplicados

| Conceito | Onde | Técnica |
|---|---|---|
| CSS Grid macro | `layout.css` | `grid-template-areas` + `minmax(0, 1fr)` |
| CSS Grid componentes | `footer.css` | `auto-fit/minmax` |
| Flexbox | navbar, hero, cards, filter | `justify-content`, `flex-direction`, `gap` |
| Custom Properties | `variables.css` | tokens de design + dark mode |
| Tipografia fluida | `hero.css` | `clamp(var(--font-lg), 5vw, var(--font-3xl))` |
| Mobile-first | `layout.css`, todos components | `min-width` em todos os breakpoints |
| BEM | `navbar.css`, `card.css`, `item-card.css`, `btn.css` | `.block__element--modifier` |
| Animação | `item-card.css` + `main.js` | `@keyframes cardEnter` + stagger via CSS var |
| Acessibilidade | `btn.css`, `navbar.css` | `:focus-visible`, `aria-expanded`, `aria-pressed` |
| Overflow containment | `reset.css`, `layout.css` | `overflow-x: clip`, `minmax(0, 1fr)` |

---

*Engenharia de Interface HTML5/CSS3 | Prof. Jeofton Costa | UNIPÊ | 2026*
