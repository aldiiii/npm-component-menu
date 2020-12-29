import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/aldi/playground/web/savikindo/svknd-component/node_modules/@vuepress/theme-default/lib/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/aldi/playground/web/savikindo/svknd-component/node_modules/@vuepress/theme-default/lib/layouts/Layout.vue")),
}
