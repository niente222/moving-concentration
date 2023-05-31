import path from 'path';
import { defineConfig } from '@vue/cli-service';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'www.ugoku-sinkesuijaku.com',
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  pages: {
    index: {
      title: '動く神経衰弱',
    },
  },
});
