<div align="center">

<h1>Rithm UI</h1>

<p>
  Animated React components you can copy, install with the shadcn CLI,<br/>
  or just ask your AI editor for.
</p>

<p>
  <a href="/docs">Docs</a> ·
  <a href="/docs/mcp">MCP Server</a> ·
  <a href="/charts">Charts</a> ·
  <a href="/blocks">Blocks</a>
</p>

</div>

## What it is

Rithm UI is a free collection of React components built on shadcn/ui, Tailwind CSS, and Motion. Nothing is hidden behind a package. The source lands in your project, and from there it's yours to change.

There are 44 components in the docs today, plus page blocks and a few full templates. Every one has a live preview and its code sitting right underneath.

## Getting a component

Pick whichever way suits you.

**Ask your editor.** Connect the MCP server once and Claude Code, Cursor, or Windsurf can browse and install components for you:

```bash
claude mcp add rithm-ui -- npx -y @rithmui/mcp
```

Then just say what you want: _"add the kanban board and animated drawer to my project."_ Setup for the other editors is in the [MCP docs](/docs/mcp).

**Use the shadcn CLI.** If your project already has shadcn/ui set up:

```bash
npx shadcn@latest add @rithmui/animated-drawer
```

**Copy it.** Open a component page, hit copy, paste it in. That works too.

## What's in here

- **Components** — forms, cards, buttons, ratings, overlays, media, auth, feedback
- **Blocks** — hero, pricing, FAQ, CTA and footer sections
- **Templates** — dashboards and landing pages you can lift wholesale
- **Colors** — a palette browser at [/colors](/colors)

## Running it locally

```bash
git clone https://github.com/aadiexii/Rithm-UI.git
cd Rithm-UI
npm install
npm run dev
```

That's [localhost:3000](http://localhost:3000). Docs, components, and the registry all work out of the box.

| Command | Does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run test` | Checks the registry, catalog, metadata, and structured data line up |

Built with Next.js 14 (App Router), TypeScript, Tailwind, Radix, and Motion.

## Author

Created by **Shivam O Sharma**.
