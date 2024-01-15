<script setup lang="ts">
  import sidebarItems from "@/data/sidebar-items";

  const githubLink = "https://github.com/jasonchuacodes";
  const linkedInlink =
    "https://www.linkedin.com/in/jason-clyde-chua-65a322243/";
</script>
<template>
  <div
    class="sticky top-0 flex flex-col justify-between items-center h-screen w-40 py-6 bg-sidebar/50 z-50"
  >
    <p class="text-light text-l1-r">
      jason.<span class="text-primary-400">chua</span>
    </p>
    <div class="flex flex-col items-start w-full">
      <div
        class="flex w-full"
        v-for="{ id, title, icon, linkTo } in sidebarItems"
      >
        <BaseSidebarItem
          :key="id"
          :id="id"
          :title="title"
          :icon="icon"
          :link-to="linkTo"
        ></BaseSidebarItem>
      </div>
    </div>
    <div class="space-x-4">
      <BaseIconLink icon-name="mdi:github" :link="githubLink" />
      <BaseIconLink icon-name="mdi:linkedin" :link="linkedInlink" />
    </div>
  </div>
</template>

