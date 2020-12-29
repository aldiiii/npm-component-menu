import { defineAsyncComponent } from 'vue'

export const pagesComponent = {
  "/": defineAsyncComponent(() => import(/* webpackChunkName: "v-8daa1a0e" */"/home/aldi/playground/web/savikindo/svknd-component/docs/.vuepress/.temp/pages/README.vue")),
  "/guide.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-5d7259d4" */"/home/aldi/playground/web/savikindo/svknd-component/docs/.vuepress/.temp/pages/guide.vue")),
  "/404.html": defineAsyncComponent(() => import(/* webpackChunkName: "v-3706649a" */"/home/aldi/playground/web/savikindo/svknd-component/docs/.vuepress/.temp/pages/404.html.vue")),
}
