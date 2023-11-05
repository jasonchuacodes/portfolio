<script setup>
  defineProps({
    title: String,
    iconName: String,
    isActiveSidebarId: Number,
    id: Number,
    linkTo: String,
  });
</script>
<template>
  <NuxtLink
    :to="linkTo"
    :class="[
      'flex justify-start items-center w-full h-16 space-x-4 px-6 py-2 text-light text-p1-r hover:bg-sidebarHover hover:border-r-[1px] hover:cursor-pointer hover:border-light',
      { 'bg-sidebarHover border-r-[1px]': isActiveSidebarId == id },
    ]"
  >
    <Icon :name="iconName" class="w-4 h-4" /><span>{{ title }}</span>
  </NuxtLink>
</template>

