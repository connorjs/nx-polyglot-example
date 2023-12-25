# Nx polyglot example

Example [Nx] monorepo with multiple languages (polyglot).

**Table of contents**

- [Goals](#goals)
- [About](#about)
- [Workspace structure](#workspace-structure)
- [Getting started](#getting-started)
- [Glossary](#glossary)

## Goals

1. Learn more about [Nx]
2. Showcase a polyglot monorepo and its benefits
3. Define (my) standard build targets (tasks)

## About

This repository contains npm (TypeScript) and .NET (C#) projects.
Nx orchestrates the build process across both build tools (`npm` and `dotnet`).

Nx caches task results, handles execution order, and can run only “affected” tasks;
all of which speed up local development.

## Workspace structure

### Directories

An overview of the root directories follows.
Refer to the [§ Glossary](#glossary) for clarity on any terms.

- `.husky`: Git hooks

- `apps`: Applications

- `docs/decisions`: Any decision records (ADRs)

- `libs`: Libraries

- Repository-wide configuration files live in the root directory or in `.config`

> [!Note]
>
> `apps` and `libs` represent a flat, two-tier structure of projects.
> However, a more complex repository may prefer a three-tier structure that groups based on application (or technology).
> See [“Using Nx at Enterprises”][nx-enterprise].

[nx-enterprise]: https://nx.dev/concepts/more-concepts/monorepo-nx-enterprise

### Project naming conventions

Projects reside within the `apps` and `libs` directories.
They should follow the naming conventions of their technology.

For example, npm/Node projects use `lower-kebab-case-like-this`
and .NET projects use `Namespaced.PascalCase.LikeThis`.

## Getting started

To build and run the projects, you need `npm` (`node`) and `dotnet` installed.
Refer to the official docs (below) or follow your personal preference or company’s guidance.

- [“Downloading and installing Node.js and npm”](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [“Download .NET”](https://dotnet.microsoft.com/en-us/download)

Complete the following steps to build and run an application.

1. Verify installation.

   ```shell
   node --version
   npm --version
   dotnet --version
   ```

2. Install npm dependencies.
   This will also restore .NET tool dependencies.

   ```shell
   npm ci # or npm i
   ```

3. Install `nx` globally.

   ```shell
   npm install --global nx@latest
   ```

   Installing globally allows running commands without the `npx` prefix.
   The global `nx` will use the locally installed version for consistency.

4. Build all projects.

   ```shell
   npm run ci-build
   ```

   The `ci-build` npm run script executes a “full” CI build including the .NET projects.
   It uses `nx run-many`; see [package.json](./package.json) for the full list of targets.

## Glossary

### Application

A [**project**](#project) that runs on its own;
a deployed unit (along with its dependent [**libraries**](#library)).
It matches the [Container term in the C4 model][c4model].

Applications reside in the `apps` directory.
See [Nx’s “Applications and libraries”][nx-apps-and-libs].

[c4model]: https://c4model.com
[nx-apps-and-libs]: https://nx.dev/concepts/more-concepts/applications-and-libraries

### Library

A [**project**](#project) that is used by [**applications**](#application) or other **libraries**.

Libraries reside in the `libs` directory.
See [Nx’s “Applications and libraries”][nx-apps-and-libs].

### Monorepo

A single repository containing multiple projects with well-defined relationships.
See [monorepo.tools][monorepo-tools].

[monorepo-tools]: https://monorepo.tools

### Nx

A build system built by Nrwl with first-class monorepo support. See [nx.dev][nx].

[nx]: https://nx.dev/

### Polyglot

Multiple programming languages. See [“Polyglot (computing)” on Wikipedia][polyglot].

[polyglot]: https://en.wikipedia.org/wiki/Polyglot_(computing)

### Project

An individual unit (think module) of functionality.
Synonymous with .NET project or npm package.
Applications and libraries both represent projects.

### Repository

The git repository and all of its code/files. _Also known as **Solution** and **Workspace**._

- **Repository** used when emphasizing the git or raw files aspect.
- **Solution** used when emphasizing the library and application code, given they solve problems (provide value).
  - **.NET Solution**: Used when explicitly referencing the .NET (C#) concept:
    [“What are solutions and projects?”][dotnet-solutions-and-projects]
- **Workspace**: Used when emphasizing the collection of projects or discussing build orchestration.

[dotnet-solutions-and-projects]: https://learn.microsoft.com/en-us/visualstudio/ide/solutions-and-projects-in-visual-studio?view=vs-2022
