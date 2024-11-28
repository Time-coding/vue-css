import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import BackdropFilter from '@/components/BackdropFilter.vue';
import DraggableList from '@/components/DraggableList.vue';
import FlameGraph from '@/components/FlameGraph.vue';
import Accordion from '@/components/AccordionBanner.vue';
import TextColumn from '@/components/TextColumn.vue';
import ScrollSnap from '@/components/ScrollSnap.vue';

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      // hidden: true,
      title: 'Home',
    },
  },
  {
    path: '/backdrop-filter',
    name: 'BackdropFilter',
    component: BackdropFilter,
    meta: {
      // hidden: true,
      title: '磨砂玻璃效果',
    },
  },
  {
    path: '/draggable-list',
    name: 'DraggableList',
    component: DraggableList,
    meta: {
      // hidden: true,
      title: '火焰图',
    },
  },
  {
    path: '/flame-graph',
    name: 'FlameGraph',
    component: FlameGraph,
    meta: {
      // hidden: true,
      title: '拖拽排序',
    },
  },
  {
    path: '/accordion',
    name: 'Accordion',
    component: Accordion,
    meta: {
      // hidden: true,
      title: '轮播图',
    },
  },
  {
    path: '/text-column',
    name: 'TextColumn',
    component: TextColumn,
    meta: {
      // hidden: true,
      title: '轮播图',
    },
  },
  {
    path: '/scroll-snap',
    name: 'ScrollSnap',
    component: ScrollSnap,
    meta: {
      // hidden: true,
      title: '轮播图',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  if (to.meta?.title) {
    document.title = [to.meta.title, '旅游官网'].join(' | ');
  } else {
    document.title = '未来出行探索者';
  }
});

// 点击菜单时，捕捉报错，刷新页面
router.onError((error) => {
  if (error.message.includes('Failed to fetch dynamically imported module')) {
    window.location.reload();
  }
});

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route;
      if (
        name &&
        meta.roles &&
        Array.isArray(meta.roles) &&
        meta.roles?.length
      ) {
        router.hasRoute(name) && router.removeRoute(name);
      }
    });
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload();
  }
}

export default router;
