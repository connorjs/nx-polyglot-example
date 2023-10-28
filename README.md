# Nx polyglot example

Example [Nx] monorepo with multiple languages (polyglot).

**Table of contents**

- [My goals](#my-goals)
- [About](#about)
- [Glossary](#glossary)

## My goals

1. Learn more about [Nx]
2. Showcase a polyglot monorepo and its benefits
3. Define (my) standard build targets (tasks)

## About

This repository (a.k.a. the solution or workspace) contains npm (TypeScript) and .NET (C#) projects.
Nx orchestrates the build process across both build tools (`npm` and `MSBuild`).

Nx caches task results, handles execution order, and can run only “affected” tasks; all of which speed up local development.
In the future I will explore remote caching to improve CI builds.

## Glossary

- **Monorepo**: A single repository containing multiple projects with well-defined relationships. See [monorepo.tools][monorepo-tools].

- **Nx**: A build system built by Nrwl with first-class monorepo support. See [nx.dev][nx].

- **Polyglot**: Multiple programming languages. See [“Polyglot (computing)” on Wikipedia][polyglot].

- **Repository**: The git repository and all of its code/files. _Also known as **Solution** and **Workspace**._

  - **Repository** used when emphasizing the git or raw files aspect.
  - **Solution** used when emphasizing the library and application code, given they solve problems (provide value).
    - **.NET Solution**: Used when explicitly referencing the .NET (C#) concept: [“What are solutions and projects?”][dotnet-solutions-and-projects]
  - **Workspace**: Used when emphasizing the collection of projects or discussing build orchestration.

- **Solution**: _See **Repository**._

- **Workspace**: _See **Repository**._

[dotnet-solutions-and-projects]: https://learn.microsoft.com/en-us/visualstudio/ide/solutions-and-projects-in-visual-studio?view=vs-2022
[monorepo-tools]: https://monorepo.tools
[nx]: https://nx.dev/
[polyglot]: https://en.wikipedia.org/wiki/Polyglot_(computing)
