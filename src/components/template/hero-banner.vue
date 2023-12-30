<template>
  <div
    class="flex flex-col w-full items-center space-y-2 px-10 py-2 bg-white bg-opacity-5 border-t border-r border-neutral"
  >
    <h1 class="font-russo text-h1 text-white uppercase">{{ title }}</h1>
    <p
      class="font-rubik text-l1-r tracking-widest font-sans text-primary-500 lowercase"
    >
      {{ position }}
    </p>
  </div>
</template>
<script setup lang="ts">
  type HeroBannerProps = {
    title: string;
    position: string;
  };

  defineProps<HeroBannerProps>();
</script>
