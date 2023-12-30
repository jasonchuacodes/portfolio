<template>
  <div
    class="content flex w-full h-screen bg-default text-white"
    ref="parallaxContainer"
    @mousemove="handleMouseMove"
  >
    <Sidebar/>
    <div class="relative flex flex-1 h-screen items-center justify-center">
      <slot />
    </div>
  </div>
</template>
<script setup>
  useHead({
    title: "Jason - Portfolio",
    link: [
      // create a favicon.ico file in the public dir
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: "icon", type: "image/x-icon", href: "none" },
    ],
  });
</script>
