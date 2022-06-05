import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/cli.ts'
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
