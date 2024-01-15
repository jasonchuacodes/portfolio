<template>
  <Icon
    v-if="iconName"
    :name="iconName"
    :class="class"
    class="w-8 h-8 text-light hover:text-white hover:cursor-pointer"
  />
</template>
<script setup lang="ts">
  defineProps({
    iconName: String,
    class: {
      type: String,
      default: undefined,
    },
    githubLink: String
  });
</script>
