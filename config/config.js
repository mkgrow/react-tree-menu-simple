// https://umijs.org/config/
import { defineConfig } from 'umi';
import routes from './router.config';

// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION, REACT_APP_ENV, GA_KEY } = process.env;

export default defineConfig({
  hash: true,
  history: { type: 'hash' },
  publicPath: '/',
  favicon: 'favicon.ico',
  dynamicImport: {},
  analytics: GA_KEY
    ? {
        ga: GA_KEY,
      }
    : false,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: routes,
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  manifest: {
    basePath: '/',
  }
});
