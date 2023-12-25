# Use Prettier with tabs for formatting

## Context and problem statement

We want a tool to automate and enforce code formatting, so we do not have style debates in code reviews.

What tool and what options should we use?

## Considered options

_Listed alphabetically_

- [Editor config](https://editorconfig.org)
- [Prettier](https://prettier.io)

## Decision outcome

Chosen option: **Prettier**

- It’s [option philosophy](https://prettier.io/docs/en/option-philosophy) limits decisions.
- Use tabs (not spaces) for [an accessible-first environment](https://alexandersandberg.com/articles/default-to-tabs-instead-of-spaces-for-an-accessible-first-environment/).
- It has auto-fixing (`--write` or `-w`) and enforcement (`--list-different` or `-l`).

Editor config represents the default in .NET projects, but Prettier represents a common standard in the front-end space.
[CSharpier](https://csharpier.com) also exists for .NET, which benefits the Prettier decision.

## More information

Use [husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/lint-staged/lint-staged#readme) to power the `pre-commit` git hook that will apply formatting on commit.
