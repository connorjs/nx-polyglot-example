# Web

Web application built with React and Vite.

## Quick notes

- Run the application.

  ```shell
  nx web:dev
  ```

- Analyze the production bundle with the Rollup visualizer.

  ```shell
  nx web:visualize
  ```

  This task will generate three visualizations in the `libs/web/build/stats` directory to analyze the bundle size.
  See [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) to learn more (although we use the Vite package).

  Open the folder containing the visualizations.

  - Mac: `open libs/web/build/stats`
  - Windows: `start libs/web/build/stats`
