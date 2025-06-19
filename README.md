# PromptKit - Custom components CLI tool 

The project aims to build a modern, customizable UI library platform that empowers developers to quickly generate and integrate high-quality, theme-consistent UI components into their projects. Its key features and goals are:

- **Custom Component Generation:**
Developers can generate React (and potentially other framework) components tailored to their needs, using either direct inspiration from existing websites or by specifying design themes and requirements.
- **Automated Theme Extraction:**
Users can provide a website URL, and the system will analyze the site's styles (colors, typography, spacing, etc.) to extract a design theme, which can then be applied to all generated components.
- **CLI Tooling:**
A command-line interface (CLI) allows developers to:
    - Initialize new projects with the custom UI system.
    - Extract themes from websites.
    - Add, customize, and preview components before integrating them.
    - Seamlessly copy generated code into their codebase.
- **Web Dashboard:**
A Next.js-based web UI provides:
    - Live previews of components with the selected or extracted theme.
    - The ability to tweak, review, and copy component code visually before adding it to a project.
    - Real-time collaboration and customization features.
- **AI-Powered Generation:**
The backend leverages AI (e.g., OpenAI/Claude) to generate production-ready, accessible, and customizable component code based on user input and extracted themes.
- **Monorepo Architecture:**
The project is structured as a monorepo using Turborepo, with clear separation between the CLI, UI component library, theme extraction logic, AI integration, and the web dashboard.
- **Commercialization Ready:**
The platform is designed with scalability and monetization in mind, supporting a workflow that could be offered as a commercial SaaS or developer tool in the future.

**In summary:**
This project aims to revolutionize the way developers build and customize UI by combining theme extraction, AI-driven code generation, and a seamless CLI + web dashboard workflow—making it easy to create, preview, and integrate beautiful, consistent components into any project.



# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
