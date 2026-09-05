# @rithmui/mcp

**Model Context Protocol server for [Rithm UI](https://rithmui.com)**

Lets AI assistants (Claude, Cursor, Windsurf, Zed) browse, search, and install Rithm UI components directly into your codebase — no copy-pasting.

```
You: "Add the AnimatedDrawer from Rithm UI to my project"

Claude (via MCP):
  → calls rithm_ui.search_components("animated drawer")
  → calls rithm_ui.get_component("animateddrawer")
  → calls rithm_ui.install_component("animateddrawer")
     runs: bunx --bun shadcn@latest add @rithmui/animateddrawer
  → component installed, import ready ✅
```

---

## Setup

### Claude Desktop

Add to `~/.claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "rithm-ui": {
      "command": "npx",
      "args": ["-y", "@rithmui/mcp"]
    }
  }
}
```

Restart Claude Desktop. You'll see "rithm-ui" in the tools list.

### Cursor

Add to `.cursor/mcp.json` in your project root:

```json
{
  "mcpServers": {
    "rithm-ui": {
      "command": "npx",
      "args": ["-y", "@rithmui/mcp"]
    }
  }
}
```

### Windsurf

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "rithm-ui": {
      "command": "npx",
      "args": ["-y", "@rithmui/mcp"]
    }
  }
}
```

---

## Tools

| Tool | Description |
|---|---|
| `list_components` | List all components, optionally filtered by category |
| `search_components` | Fuzzy search by keyword — returns ranked matches |
| `get_component` | Full metadata + install instructions for a component |
| `list_categories` | All categories with component counts |
| `install_component` | Runs `npx shadcn@latest add` to install into your project |

---

## Example prompts

- *"Show me all Rithm UI animation components"*
- *"Find a date picker in Rithm UI"*
- *"Install the kanban board component from Rithm UI"*
- *"What categories does Rithm UI have?"*
- *"Get details for the event-calendar component"*

---

## Requirements

- Node.js 18+
- A project using Next.js + Tailwind CSS + shadcn/ui (for `install_component`)

---

## Links

- **Website**: https://rithmui.com
- **Docs**: https://rithmui.com/docs
- **GitHub**: https://github.com/aadiexii/Rithm-UI

---

MIT License © Shivam O Sharma
