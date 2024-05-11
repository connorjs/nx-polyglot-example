# Web

Web application built with React and Vite.

## Quick notes

- Run the application.

  ```shell
  nx dev web
  ```

- Analyze the production bundle with the Rollup visualizer.

  ```shell
  nx visualize web
  ```

  This task will generate three visualizations in the `apps/web/build/stats` directory to analyze the bundle size.
  See [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) to learn more (although we use the Vite package).

  Open the folder containing the visualizations.

  - Mac: `open apps/web/build/stats`
  - Windows: `start apps/web/build/stats`
