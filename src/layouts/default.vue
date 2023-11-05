<template>
<<<<<<< Updated upstream
  <div>
    <BaseNavbar />
    <slot />
  </div>
</template>
<script setup></script>
=======
  <div class="flex h-screen bg-default text-white">
    <Sidebar />
    <div class="flex flex-1 h-screen">
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
      { rel: 'icon', type: 'image/x-icon', href: 'none' }
    ],
  });
</script>

>>>>>>> Stashed changes
