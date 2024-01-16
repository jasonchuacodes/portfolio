<script setup lang="ts">
  import { vElementVisibility } from "@vueuse/components";
  import projects from "@/data/projects";
import { DetailProps } from "../base/project-card.vue";

  const target = ref(null);
  const { isVisible, onElementVisibility } = useElementVisibility("#projects");

  const activeId = ref<number | null>(null);
  const detail = ref<string | DetailProps>("");

  const handleOpenModal = (id: number, projectDetail: DetailProps) => {
    activeId.value = id;
    detail.value = projectDetail;
  };

  const handleCloseModal = () => {
    activeId.value = null;
    detail.value = "";
  };
</script>
<template>
  <div
    id="projects"
    class="relative flex flex-col justify-center items-center w-full max-w-[640px] h-screen py-10 overflow-hidden space-y-10"
  >
    <BaseBanner
      ref="target"
      v-element-visibility="onElementVisibility"
      title="projects"
    />
    <div v-if="isVisible" class="relative flex justify-center items-center w-full h-[592px] overflow-hidden">
      <!-- Cards -->
      <template
        v-for="{ id, mainTitle, subTitle, detail, technologies } in projects"
      >
        <BaseProjectCard
          :id="id"
          :main-title="mainTitle"
          :sub-title="subTitle"
          :active-id="activeId"
          :detail="detail"
          @open-modal="handleOpenModal"
        />
        <BaseModal
          :show-modal="activeId == id"
          :main-title="mainTitle"
          :sub-title="subTitle"
          :detail="detail"
          :technologies="technologies"
          @close-modal="handleCloseModal"
        />
      </template>
    </div>
  </div>
  <!-- Modal backdrop -->
  <div
    @click="handleCloseModal"
    v-if="!!activeId"
    class="modal-wrapper absolute flex flex-col justify-center items-center w-full h-full bg-dark/80"
  ></div>
</template>

