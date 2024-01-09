<script setup lang="ts">
  type SidebarItemProps = {
    title: string;
    icon: string;
    id: number;
    linkTo: string;
  };
  
defineProps<SidebarItemProps>();
const route = useRoute();
const currentHash = ref('')

onMounted(() => {
  if (process.client) {
   currentHash.value = localStorage.getItem('route-hash') || '/'
  }

  watch(() => route.hash, (newHash) => {
    currentHash.value = newHash;
    localStorage.setItem('route-hash', newHash);
  });
});
</script>
<template>
  <a
    :href="linkTo"
    :class="{ 'bg-sidebarHover border-r-[1px]': linkTo == currentHash }"
    class="flex justify-start items-center w-full h-16 space-x-4 px-6 py-2 text-light text-p1-r hover:bg-sidebarHover hover:cursor-pointer transition-all duration-200 ease-in"
  >
    <Icon v-if="icon" :name="icon" class="w-4 h-4" /><span>{{ title }}</span>
  </a>
</template>
