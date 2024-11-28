<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 卡片数据
const cards = ref([
  {
    id: 1,
    title: '磨砂玻璃效果',
    route: 'backdrop-filter',
    description:
      'backdrop-filter 应该与 rgba 半透明色搭配，以呈现出磨砂效果，同时不影响中间文字的清晰度。',
  },
  {
    id: 2,
    title: '拖拽排序效果',
    route: 'draggable-list',
    description:
      'FLIP（First, Last, Invert, Play）是一种动画方案，主要用于优化元素位置变化时的过渡动画，使动画流畅自然。FLIP的原理是通过捕捉元素位置的前后状态，计算差异，然后反向应用过渡，让元素在视觉上平滑地过渡到新位置',
  },
  {
    id: 3,
    route: 'flame-graph',
    title: '火焰图',
    description:
      '火焰图（Flame Chart）的概念最初来源于性能分析工具，用于直观显示程序运行期间的调用栈信息，主要用于调试和性能优化。它常见于 Web 开发、后端性能分析、编译器优化等领域。',
  },
  {
    id: 4,
    route: 'accordion',
    title: '轮播图',
    description: '手风琴得一个效果，通过动态控制宽度实现',
  },
  {
    id: 5,
    route: 'text-column',
    title: '让文字立起来',
    description:
      '通过aftwe再造一个元素，再通过transform: translate(-30px, 10px) scaleY(0.5) skew(50deg);filter、z-index等',
  },
  {
    id: 6,
    route: 'scroll-snap',
    title: '轮播图强制吸附效果',
    description:
      '通过scroll-snap-type属性实现，mandatory 表示滚动后必须停在某个吸附点。x 指横向吸附（y 为纵向）。scroll-snap-align：控制每个子元素在滚动停止时的位置，比如 start（左对齐）、center（居中）。scroll-behavior: smooth; 提供平滑过渡体验。CSS 通过 ::-webkit-scrollbar 和 scrollbar-width 实现隐藏滚动条。',
  },
  // Add more cards as needed
]);
</script>

<template>
  <div class="card-grid">
    <router-link
      v-for="card in cards"
      :key="card.id"
      class="card"
      :to="`${card.route}`"
    >
      <h2>{{ card.title }}</h2>
      <p>{{ card.description }}</p>
    </router-link>
  </div>
</template>

<style scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height: 100vh;
  overflow: auto;
  padding: 20px;
  background: linear-gradient(45deg, red, yellow);
}

.card {
  width: 100%;
  max-width: 300px;
  padding: 20px;
  margin: 20px;
  background-color: #f7f6f4;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2); /* 半透明的白色背景 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 轻微的阴影 */
  backdrop-filter: blur(10px) saturate(150%); /* 玻璃模糊效果 */
  -webkit-backdrop-filter: blur(10px) saturate(150%); /* 支持 Safari */
  color: #333;
  text-align: center;
  font-family: Arial, sans-serif;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card h2 {
  margin: 0 0 10px;
  font-size: 24px;
  color: #333;
}

.card p {
  font-size: 16px;
  color: #666;
}
</style>
