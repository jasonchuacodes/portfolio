<template>
  <div class="timeline relative flex flex-col max-w-4xl mx-auto">
    <BaseTimelineBox position="left"/>
    <BaseTimelineBox position="right"/>
    <BaseTimelineBox position="left"/>
    <BaseTimelineBox position="right"/>
  </div>
</template>
<style scoped>
.timeline::after {
  content: '';
  height: 100%;
  border: 2px solid white;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  position: absolute; 
}
</style>
