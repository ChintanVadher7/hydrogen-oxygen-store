import { defineConfig } from 'vite';
import { installGlobals } from "@remix-run/node";
import { hydrogen } from '@shopify/hydrogen/vite';
import { oxygen } from '@shopify/mini-oxygen/vite';
import { vitePlugin as remix } from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      appDirectory: 'app',
      ignoredRouteFiles: ['**/.*'],
      watchPaths: ['./public', './.env'],
      server: './server.js',
      publicPath: (process.env.HYDROGEN_ASSET_BASE_URL ?? '/') + 'build/',
      assetsBuildDirectory: 'dist/client/assets',
      serverBuildPath: 'dist/server/index.js',
      serverMainFields: ['browser', 'module', 'main'],
      serverConditions: ['worker', process.env.NODE_ENV],
      serverDependenciesToBundle: 'all',
      serverModuleFormat: 'esm',
      serverPlatform: 'neutral',
      serverMinify: process.env.NODE_ENV === 'production',
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatpath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
