# Cardápio Digital — Bella Vista

**Disciplina:** Engenharia de Interface HTML5/CSS3  
**Professor:** Jeofton Costa | **UNIPÊ** | 29/04/2026

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
│  <header> <nav>                                          │
│  Logo Bella Vista          [ Links ] [ hamburguer mobile]│
├──────────────────────────────────────────────────────────┤
│  <section> .hero                                         │
│  <h1> Restaurante Bella Vista  ← único H1 na página      │
│  <p>  Slogan — tipografia fluida via clamp()             │
│  [ CTA: Ver Cardápio ]                                   │
├──────────────────────────────────────────────────────────┤
│  .category-filter  (Flexbox + overflow-x: auto)          │
│  [ Todos★ ] [ Entradas ] [ Pratos ] [ Bebidas ] [ Sbrm ] │
│  ↑ scroll horizontal no mobile, flex-shrink:0 nos botões │
├──────────────────────────────────────────────────────────┤
│  <main> .menu-grid  (Grid auto-fit/minmax)               │
│  <h2> Entradas                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ [foto]   │  │ [foto]   │  │ [foto]   │              │
│  │ <h3>Nome │  │ <h3>Nome │  │ <h3>Nome │              │
│  │ Desc.    │  │ Desc.    │  │ Desc.    │              │
│  │ R$ 00,00 │  │ R$ 00,00 │  │ R$ 00,00 │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│  mobile: 1 col → tablet 768px: 2 col → desktop: 3–4 col  │
├──────────────────────────────────────────────────────────┤
│  <footer> .footer  (Flexbox + flex-wrap)                 │
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
| Fluida (hero) | `clamp(var(--font-xl), 5vw, var(--font-3xl))` | H1 sem media query |

---

## Estrutura de Arquivos

```
cardapio-digital/
├── index.html
├── css/
│   ├── variables.css       ← tokens: cores, tipo, espaço, breakpoints, dark mode
│   ├── reset.css           ← Modern CSS Reset (Andy Bell 2024)
│   ├── base.css            ← h1–h6, p, a, ul sem classes
│   ├── layout.css          ← CSS Grid macro + 4 breakpoints mobile-first
│   ├── components/
│   │   ├── nav.css         ← Flexbox: logo + links + hamburguer
│   │   ├── hero.css        ← Flexbox + clamp() tipografia fluida
│   │   ├── category-filter.css  ← Flexbox + scroll horizontal
│   │   ├── item-card.css   ← Flexbox column + BEM + animação pop-forward
│   │   └── footer.css      ← Flexbox + flex-wrap colunas
│   └── utilities.css       ← helpers (importado por último — ITCSS)
└── js/
    └── main.js             ← filtro data-category + hamburguer + smooth scroll
```

---

## Checklist de Entregáveis

### Passo 1 — Documento de Definição do Problema
- [x] Contexto descrito (domínio, problema real)
- [x] Público-alvo definido (idade, dispositivo, contexto de uso)
- [x] Dor principal identificada
- [x] Critério de sucesso mensurável ("O usuário consegue...")

### Passo 2 — Wireframe
- [x] Wireframe ASCII documentado neste README
- [x] Header, hero, filtro, grid de conteúdo e footer identificados
- [x] Elementos HTML indicados por seção
- [x] Comportamento mobile documentado (colapso de nav, scroll de abas, 1 coluna)
- [x] Hierarquia H1 → H2 → H3 validada

### Passo 3 — Arquitetura de Arquivos
- [x] Estrutura de pastas criada (css/, css/components/, js/)
- [x] Todos os arquivos criados conforme especificação
- [x] CSS importado no `index.html` na ordem ITCSS correta (utilities por último)
- [x] Viewport meta tag presente
- [x] Google Fonts importado antes dos CSS links

### Passo 4 — Paleta de Cores
- [x] Cor primária com contraste ≥ 4.5:1 (WCAG AA) verificada
- [x] ≥ 5 cores definidas como Custom Properties
- [x] Paleta documentada neste README (nome, hex, contraste)

### Passo 5 — Tipografia e Reset
- [x] `variables.css` com escala tipográfica completa (Major Third)
- [x] Google Fonts configurado (Playfair Display + Inter)
- [x] `reset.css` com Modern CSS Reset aplicado
- [x] `prefers-reduced-motion` incluído no reset

### Passo 6 — HTML Semântico
- [x] `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [x] Hierarquia única de H1 → H2 (categorias) → H3 (pratos)
- [x] `alt` descritivo em todas as imagens
- [x] `aria-label` e `aria-pressed` nos controles de filtro
- [x] Abre sem erros no console via Live Server

### Desafio Extra
- [x] Dark mode via `prefers-color-scheme: dark` em `variables.css`

---

## Conceitos CSS Aplicados

| Conceito | Onde | Técnica |
|---|---|---|
| CSS Grid macro | `layout.css` | `grid-template-areas` + `auto-fit/minmax` |
| Flexbox | todos os componentes | `justify-content`, `flex-direction`, `flex-wrap` |
| Custom Properties | `variables.css` | tokens de design + dark mode |
| Tipografia fluida | `hero.css` | `clamp(var(--font-xl), 5vw, var(--font-3xl))` |
| Mobile-first | `layout.css` | `min-width` em todos os breakpoints |
| BEM | `item-card.css` | `.item-card__body`, `--highlight`, `--unavailable` |
| Animação | `item-card.css` + `main.js` | `@keyframes cardEnter` + stagger via CSS var |

---

*Engenharia de Interface HTML5/CSS3 | Prof. Jeofton Costa | UNIPÊ | 29/04/2026*
