<template>
  <div class="draggable-list-page">
    <button style="margin: 20px" @click="goBack">Go Back</button>
    <div class="accordion-carousel">
      <!-- 使用 Picsum URL 填充不同图片 -->
      <div
        class="panel"
        style="background-image: url('https://picsum.photos/seed/city/600/400')"
        data-title="City"
      ></div>
      <div
        class="panel"
        style="
          background-image: url('https://picsum.photos/seed/forest/600/400');
        "
        data-title="Forest"
      ></div>
      <div
        class="panel"
        style="
          background-image: url('https://picsum.photos/seed/mountain/600/400');
        "
        data-title="Mountain"
      ></div>
      <div
        class="panel"
        style="
          background-image: url('https://picsum.photos/seed/ocean/600/400');
        "
        data-title="Ocean"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineOptions({
  name: 'DraggableList',
});
const goBack = () => {
  router.push({ name: 'Home' });
};
// 控制面板的宽度
const panels = ref([]);
let lastHoveredPanel = null;

onMounted(() => {
  panels.value = document.querySelectorAll('.panel');

  panels.value.forEach((panel) => {
    panel.addEventListener('mouseenter', handleMouseEnter);
    panel.addEventListener('mouseleave', handleMouseLeave);
  });
});

const handleMouseEnter = (event) => {
  // 当鼠标进入面板时，记录最后悬浮的面板
  lastHoveredPanel = event.target;

  // 鼠标悬浮时，当前面板宽度扩大
  event.target.style.width = '600px';

  // 鼠标悬浮时，其他面板宽度缩小
  panels.value.forEach((panel) => {
    if (panel !== event.target) {
      panel.style.width = '40px';
    }
  });
};

const handleMouseLeave = () => {
  // 鼠标离开时，恢复其他面板为最小宽度
  panels.value.forEach((panel, index) => {
    if (panel !== lastHoveredPanel) {
      panel.style.width = '40px';
    }
  });

  // 保持最后悬浮的面板展开
  if (lastHoveredPanel) {
    lastHoveredPanel.style.width = '600px';
  }
};
</script>

<style scoped>
.draggable-list-page {
  background: linear-gradient(45deg, red, yellow);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.accordion-carousel {
  display: flex;
  width: 1000px;
  height: 400px;
  gap: 20px; /* 每个面板之间的间距 */
  overflow: hidden;
}
.panel {
  width: 40px; /* 默认宽度 */
  height: 100%; /* 使面板填满容器的高度 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: width 0.5s ease, box-shadow 0.3s ease; /* 平滑过渡效果 */
  position: relative;
  cursor: pointer;
}
.panel:nth-child(1) {
  width: 600px;
}
</style>
