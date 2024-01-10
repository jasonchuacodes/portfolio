<script setup lang="ts">
  import { vElementVisibility } from "@vueuse/components";
  import projects from "@/data/projects";

  const target = ref(null);
  const { onElementVisibility } = useElementVisibility("#work");

  const activeId = ref(1);
  const details = ref(projects[0].title);

  const setActiveCard = (id: number) => {
    activeId.value = id;
  };

  const setProjectDetail = (info: string) => {
    details.value = info;
  };
</script>
<template>
  <div
    id="work"
    class="flex flex-col justify-center items-center h-screen py-10 mb-60 space-y-10 overflow-hidden"
  >
  <BaseBanner
            v-element-visibility="onElementVisibility"
            title="projects"
        />

    <div
      class="flex w-full mx-auto justify-center space-x-4"
    >
      <template v-for="project in projects">
        <BaseProjectCard
          :id="project.id"
          :title="project.title"
          :filename="project.filename"
          :project-detail="project.detail"
          :activeId="activeId"
          @set-active-card="setActiveCard"
          @set-detail="setProjectDetail"
        />
      </template>
    </div>
    <div class="relative max-w-[640px] h-56 mx-auto overflow-auto text-light">
      <label
        class="flex w-full sticky top-0 text-l1-r uppercase tracking-widest p-2 bg-neutral/50"
        >Details:
      </label>
      <p class="text-p2-r p-2">{{ details }}</p>
    </div>
  </div>
</template>

