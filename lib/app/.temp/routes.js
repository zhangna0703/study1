import Vue from 'vue'
Vue.component("Bit", () => import("d:\\1shixun\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-0d99c0ac26916",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\README.md").then(comp => {
        Vue.component("v-0d99c0ac26916", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-8c4a44da7b2c2",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-8c4a44da7b2c2", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-1e837ac42563e",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-1e837ac42563e", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-83a733e3fbc47",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-83a733e3fbc47", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-10c01eb586e2b",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-10c01eb586e2b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9a3d9df3248a8",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-9a3d9df3248a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-09879b006483a",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-09879b006483a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c75d517a9e9cd",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-c75d517a9e9cd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e2e659cababbc",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-e2e659cababbc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-99d602fc71f93",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-99d602fc71f93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-762d5c71cf219",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-762d5c71cf219", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2fae195d9c8fb",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-2fae195d9c8fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b60dbc059b71f",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-b60dbc059b71f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-3e00876feb2f9",
    path: "/zh/algorithm/Charpter4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\algorithm\\Charpter4.md").then(comp => {
        Vue.component("v-3e00876feb2f9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-05c5370071151",
    path: "/zh/algorithm/Charpter5.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\algorithm\\Charpter5.md").then(comp => {
        Vue.component("v-05c5370071151", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a55a8dc2069a8",
    path: "/zh/algorithm/Charpter6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\algorithm\\Charpter6.md").then(comp => {
        Vue.component("v-a55a8dc2069a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1646faf39b6b9",
    path: "/zh/algorithm/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\algorithm\\Index.md").then(comp => {
        Vue.component("v-1646faf39b6b9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/algorithm/index.html",
    redirect: "/zh/algorithm/"
  },
  {
    name: "v-5c99002614b6a",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-5c99002614b6a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-c524b90244e58",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-c524b90244e58", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-b6bafa5e3151a",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-b6bafa5e3151a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-e7ea03ec30223",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-e7ea03ec30223", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26981fa4fc05a",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-26981fa4fc05a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-95c28d6227181",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-95c28d6227181", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fff17c9f81fbd",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-fff17c9f81fbd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-95528da5f2c22",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-95528da5f2c22", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eea4ff7756424",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-eea4ff7756424", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2c2d535b43314",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-2c2d535b43314", comp.default)
        next()
      })
    }
  },
  {
    name: "v-74a8ad01d9df8",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-74a8ad01d9df8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6a1f063fa9879",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-6a1f063fa9879", comp.default)
        next()
      })
    }
  },
  {
    name: "v-299aa227c887c",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-299aa227c887c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec97fc18f9e",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-ec97fc18f9e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc1e5beb00d21",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-cc1e5beb00d21", comp.default)
        next()
      })
    }
  },
  {
    name: "v-18e1c3cdc0293",
    path: "/zh/interview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\interview\\ali.md").then(comp => {
        Vue.component("v-18e1c3cdc0293", comp.default)
        next()
      })
    }
  },
  {
    name: "v-04f36a6c138ee",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\interview\\index.md").then(comp => {
        Vue.component("v-04f36a6c138ee", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-e0b6920b6a7c",
    path: "/zh/interview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\interview\\longhu.md").then(comp => {
        Vue.component("v-e0b6920b6a7c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dd340ff8c2b89",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-dd340ff8c2b89", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-40b0fb78234f3",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-40b0fb78234f3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-31e14f658527d",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-31e14f658527d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-75d7943b2c628",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-75d7943b2c628", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-e1fb9af94e049",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-e1fb9af94e049", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-d1faafb58f1bc",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-d1faafb58f1bc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-d9279bea36f2",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-d9279bea36f2", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-a6ed7542023b8",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-a6ed7542023b8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-130416938761b",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-130416938761b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b57564c492001",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-b57564c492001", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f647dd2921076",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-f647dd2921076", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-c37178c925fa8",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-c37178c925fa8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-609ab2ae8897b",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-609ab2ae8897b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-20003109bd1b6",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-20003109bd1b6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-bdfc51ff382f1",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-bdfc51ff382f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f98e6833cf98a",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-f98e6833cf98a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-9a13fb2560397",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-9a13fb2560397", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-d586ff5e01ef8",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-d586ff5e01ef8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-540b600e5b9",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-540b600e5b9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a4fbd63eddf22",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-a4fbd63eddf22", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2773bce7807ab",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-2773bce7807ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ca22a975d4b03",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-ca22a975d4b03", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8fc83d121ad83",
    path: "/zh/standard/Spa.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\standard\\Spa.md").then(comp => {
        Vue.component("v-8fc83d121ad83", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f47bc1b2e0e84",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-f47bc1b2e0e84", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a8a0f50dffc5",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-1a8a0f50dffc5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a5ff81eed6f1",
    path: "/zh/standard/vueProject.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\standard\\vueProject.md").then(comp => {
        Vue.component("v-3a5ff81eed6f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f81dc7b695304",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-f81dc7b695304", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ebfc3162bc2cd",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-ebfc3162bc2cd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a9162fd624d",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-7a9162fd624d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-ef22d7435cd7",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-ef22d7435cd7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-56ba4045dd292",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-56ba4045dd292", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-1d6c9e62d29dc",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-1d6c9e62d29dc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-ba67b7ddf1c2d",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-ba67b7ddf1c2d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-451265cb0369f",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-451265cb0369f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-0bf27efd6ba79",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-0bf27efd6ba79", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-114fd7744267c",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-114fd7744267c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af2b02e36aba8",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-af2b02e36aba8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc8ee667efde",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-cc8ee667efde", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    name: "v-605b788bd365b",
    path: "/zh/vue/%E4%BC%A0%E5%8F%82.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("d:\\1shixun\\study\\src\\zh\\vue\\传参.md").then(comp => {
        Vue.component("v-605b788bd365b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/传参.html",
    redirect: "/zh/vue/%E4%BC%A0%E5%8F%82.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]