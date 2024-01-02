<template>
  <NuxtLink :to="link" target="_blank">
    <Icon
    v-if="iconName"
    :name="iconName"
    :class="class"
    class="w-8 h-8 text-light hover:text-white hover:cursor-pointer  transition-all duration-50 ease-in"
  />
  </NuxtLink>
</template>
<script setup lang="ts">
  defineProps({
    iconName: String,
    class: {
      type: String,
      default: undefined,
    },
    link: String
  });
</script>
