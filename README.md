# AutoDev Hub

A modern frontend Monorepo project based on shadcn/ui, utilizing the latest Next.js 15 and React 19, providing efficient development experience and component reusability.

> AutoDev Work provides contextual intelligence to empower AI Copilots such as AutoDev.

## Overview

AutoDev Work provides a unified platform for development teams to:

- **AI-Powered Development**: Leverage advanced AI tools and models to assist in coding, debugging, and problem-solving
- **Knowledge Management**: Centralize and organize development knowledge, patterns, and best practices
- **Workflow Automation**: Streamline development processes through intelligent automation and pattern recognition
- **Metrics & Analytics**: Track and analyze development performance and productivity metrics
- **API/Components Marketplace**: Access a marketplace of reusable components and libraries to accelerate development
- **Documentation**: Maintain comprehensive documentation with AI-assisted content generation and management

## 🚀 Features

- **Monorepo Structure**: Manage multi-package projects with pnpm workspace and TurboRepo
- **Modern Tech Stack**:
  - Next.js 15 (with App Router and RSC)
  - React 19
  - TypeScript 5.8
- **Beautiful UI Component Library**: Customizable component library based on shadcn/ui
- **Powerful Extended Components**:
  - Tables (Tanstack Table v8)
  - Charts (Recharts)
  - Drag and Drop functionality (dnd-kit)
  - Theme switching (next-themes)
- **Development Tools**:
  - ESLint + Prettier for code quality assurance
  - TypeScript type checking
  - Turbo build optimization

## 📦 Project Structure

```
autodev-hub/
├── apps/                # Applications directory
│   └── web/             # Main Web application (Next.js)
├── packages/            # Shared packages directory
│   ├── eslint-config/   # Shared ESLint configuration
│   ├── typescript-config/ # Shared TypeScript configuration
│   └── ui/              # UI component library
├── .cursor/rules/       # Cursor AI assistance rules
├── pnpm-workspace.yaml  # PNPM workspace configuration
├── turbo.json           # Turborepo configuration
└── package.json         # Root project configuration
```

## 🛠️ Installation

Ensure your system has Node.js 20+ and pnpm 10+ installed.

```bash
# Install dependencies
pnpm install

# Start development mode
pnpm dev

# Build project
pnpm build
```

## 🧩 Using Components

Import components from the UI component library:

```tsx
// Method 1: Direct import
import { Button } from "@workspace/ui/components/button";

// Method 2: Import via UI alias (in web application)
import { Button } from "@/ui/button";

// Using the component
export default function Page() {
  return (
    <div>
      <Button>Click Button</Button>
    </div>
  );
}
```

## 📚 Adding New Components

Use the shadcn/ui CLI tool to add new components:

```bash
# Run in the project root directory
cd apps/web
pnpm dlx shadcn@latest add [component-name] -c .
```

This will generate component code in the `packages/ui/src/components` directory.

## 🎨 Customizing Themes

The project uses `next-themes` to implement theme switching and supports dark mode:

1. Edit `packages/ui/src/styles/globals.css` to adjust global styles
2. Use CSS variables to customize theme colors
3. Implement theme switching through the `next-themes` API

## 🚢 Deployment

The project is configured for common deployment platforms:

- **Vercel**: Best choice, supports Next.js and monorepos
- **Netlify/Cloudflare Pages**: Requires minimal additional configuration

## 🧪 Development Workflow

```bash
# Start development server
pnpm dev

# Code checking
pnpm lint

# Fix lint issues
pnpm lint:fix

# Format code
pnpm format

# Update dependencies
pnpm bump
```

## 🚀 Roadmap

- [ ] packages/db: Integrate Drizzle ORM
- [ ] packages/auth: Integrate better auth
- [ ] apps/api: hono.js + Drizzle ORM + better auth + oRPC
- [ ] Improve: lint & format & pre-commit (husky & commit-lint)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
