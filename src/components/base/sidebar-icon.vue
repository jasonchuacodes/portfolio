<script setup>
  defineProps({
    iconName: String,
    class: {
      type: String,
      default: undefined,
    },
  });
</script>
<template>
  <Icon
    :name="iconName"
    :class="class"
    class="w-8 h-8 text-light hover:text-white hover:cursor-pointer"
  />
</template>
