<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

defineOptions({
  name: 'TextColumn',
});
const goBack = () => {
  router.push({ name: 'Home' });
};
</script>
<template>
  <div class="container" @click="goBack">
    <h1>wewewewee</h1>
  </div>
</template>

<style>
.container {
  background: linear-gradient(45deg, red, yellow);
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  position: relative;
  z-index: 1;
  color: #fff;
}
h1::after {
  content: 'wewewewee';
  position: absolute;
  left: 0;
  color: #000;
  transform: translate(-30px, 10px) scaleY(0.5) skew(50deg);
  z-index: -1;
  filter: blur(2px);
  mask: linear-gradient(transparent, #000);
}
</style>
