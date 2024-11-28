import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isDev = env?.VITE_NODE_ENV === 'development';
  return {
    plugins: [
      vue(),
      vueJsx(),
      viteCompression({
        //生成压缩包gz
        verbose: true, // 输出压缩成功
        disable: false, // 是否禁用
        deleteOriginFile: false, //删除源文件
        threshold: 10240, // 体积大于阈值会被压缩，单位是b
        algorithm: 'gzip', // 压缩算法
        ext: '.gz', // 生成的压缩包后缀
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      outDir: 'dist', // 输出目录
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash:8].js',
          entryFileNames: 'js/[name]-[hash:8].js',
          assetFileNames: '[ext]/[name]-[hash:8].[ext]',
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
    esbuild: {
      drop: ['console', 'debugger'], // 移除 console 和 debugger 语句
    },
  };
});
