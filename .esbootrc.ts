import { defineConfig } from '@dz-web/esboot';
import vitestPlugin from '@dz-web/esboot-plugin-vitest';
import tailwindcssPlugin from '@dz-web/esboot-plugin-tailwindcss';
import type { CompileTimeConfig } from '@dz-web/esboot';

export default defineConfig({
  mfsu: false,
  // analyze: true,
  // extraBabelIncludes: [
  //   /filter-obj/i,
  //   /immer/i,
  //   /zustand/i,
  //   /query-string/i,
  //   /react-intl/i,
  //   /d3-/i,
  //   /@tanstack/i,
  //   /@react-spring/i,
  //   /@floating-ui/i,
  // ],
  plugins: [vitestPlugin(), tailwindcssPlugin()],
});

export const afterHooks = (compileTimeConfig: CompileTimeConfig) => {
  // console.log(compileTimeConfig, '<-- compileTimeConfig');
};
